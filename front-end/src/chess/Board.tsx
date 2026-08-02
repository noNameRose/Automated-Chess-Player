import { useContext, useEffect, useMemo, useRef, useState } from "react";
import type { PieceString, PlayerString } from "../../public/static/chessConfig";
import { BoardEntity } from "./core/BoardEntity";
import type { CellEntity } from "./core/CellEntity";
import gsap from "gsap";
import DraggableContext from "../contexts/DraggableContext";
import type { coordinate } from "../contexts/CellCoordinatesContext";
import CellCoordinateContext from "../contexts/CellCoordinatesContext";
import ValidateUserMoveContext from "../contexts/ValidateUserMoveContext";
import BoardContext from "../contexts/BoardContext";
import ThinkingContext from "../contexts/ThinkingContext";
import GameOverContext from "../contexts/GameOverContext";
import PlayerMovesContexts from "../contexts/PlayerMovesContext";


type PieceStringBoard = (PieceString | null)[][]

type StateResponse = {
    state: PieceStringBoard
}

type MoveResponse = {
    state: PieceStringBoard,
    from: number[],
    to: number[],
    move: string,
    gameOver: boolean
};

type MoveRequest = {
    state: PieceStringBoard,
    isBlack: boolean,
    playerName: PlayerString
};


type ValidateMoveRequest = {
    state: PieceStringBoard,
    from: number[],
    to: number[]
};

type ValidateMoveResponse = {
    state: PieceStringBoard,
    gameOver: boolean,
    move: string
}

type GameState = {
    board: (PieceStringBoard | null),
    currentPlayer: "BLACK" | "WHITE" | null,
    winner: PlayerString | null,
    atStart: boolean,
};

type BoardProp = {
    firstPlayer: PlayerString,
    secondPlayer: PlayerString
}

const Board = ({firstPlayer, secondPlayer}: BoardProp) => {
    const URL = import.meta.env.VITE_API_URL;
    const tl = useRef<GSAPTimeline | null>(null);
    const [state, setState] = useState<GameState>({
                                                    board: null,
                                                    atStart: true,
                                                    winner: null,
                                                    currentPlayer: null
    });
    const playerMoveContext = useContext(PlayerMovesContexts);
    const thinkingContext = useContext(ThinkingContext);
    const gameOverContext = useContext(GameOverContext);
    let blackDraggable = false;
    let whiteDraggable = false;
    if (firstPlayer === "Human" && state.currentPlayer === "BLACK") {
        blackDraggable = true;
    }
    if (secondPlayer === "Human" && state.currentPlayer === "WHITE") {
        whiteDraggable = true;
    }

    let cellCoordinates: coordinate[] | null = null;
    let board: BoardEntity | null = useMemo(
        () => (state.board ? BoardEntity.parse(state.board, firstPlayer, secondPlayer) : null ),
        [state]
    );
    if (board) {
        cellCoordinates = board.getCellCoordinates();
    }

    const validateUserMove = async (from: number[], to: number[]) => {
        const url = URL + "/make_move";
        const reqBody: ValidateMoveRequest = {
            state: state.board as PieceStringBoard,
            from,
            to
        };
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        });
        if (response.ok) {
            const resBody = await response.json() as ValidateMoveResponse;
            const currentPlayer = state.currentPlayer;
            const nextPlayer = currentPlayer === "BLACK" ? "WHITE": "BLACK";
            setState({
                ...state,
                board: resBody.state,
                currentPlayer: nextPlayer
            });
            if (currentPlayer === "BLACK") {
                playerMoveContext?.addFirstPlayerMoves(resBody.move);
            }
            else {
                playerMoveContext?.addSecondPlayerMoves(resBody.move);
            }
        }
        else {
            setState({
                ...state,
                board: structuredClone(state.board),
            });
        }
    };


    const fetchBoardState = async () => {
        const response = await fetch(URL);
        const body = (await response.json()) as StateResponse;
        setState({
            ...state,
            board: body.state,
            atStart: false,
            currentPlayer: "WHITE"
        });
    };

    const fetchMove = async (): Promise<MoveResponse> => {
        if (thinkingContext) {
            thinkingContext.handleFirstPlayerThinking(state.currentPlayer === "BLACK");
        }
        const reqBody: MoveRequest = {
            state: state.board as PieceStringBoard,
            isBlack: (state.currentPlayer === "BLACK"),
            playerName: state.currentPlayer === "BLACK" ? firstPlayer : secondPlayer
        };
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        });
        const body = (await response.json()) as MoveResponse;
        return body;
    };
    
    

    useEffect(() => {
        if (gameOverContext && gameOverContext.isGameOver) {
            return;
        }
        tl.current = gsap.timeline();
        // Fetch board at the beginning of a new game
        if (state.atStart) {
            fetchBoardState()
        }
        else {
            const currentPlayer = (state.currentPlayer === "BLACK") ? firstPlayer : secondPlayer;
            const isHuman = currentPlayer === "Human";
            if (!isHuman) {
                const promise = fetchMove();
                promise.then((moveResponse: MoveResponse) => {
                    const fromCell = moveResponse.from;
                    const toCell = moveResponse.to;
                    const move = moveResponse.move;
                    const piece = board?.getPiece(fromCell[0], fromCell[1]);
                    const cell = board?.getCell(toCell[0], toCell[1]);
                    const capturePiece = board?.getPiece(toCell[0], toCell[1]);
                    piece?.moveToCell(tl.current as GSAPTimeline, 
                                    cell as CellEntity,
                                    capturePiece ? () => {} : () => {
                                        const currentPlayer = state.currentPlayer;
                                        const nextPlayer = currentPlayer === "BLACK" ? "WHITE" : "BLACK";
                                        setState({
                                            ...state, 
                                            // isGameOver: moveResponse.gameOver,
                                            board: moveResponse.state,
                                            currentPlayer: nextPlayer
                                        });
                                        if (moveResponse.gameOver) {
                                            gameOverContext?.handleGameOver(true);
                                        }
                                        if (thinkingContext) {
                                           thinkingContext.handleFirstPlayerThinking(nextPlayer === "BLACK");
                                        }
                                        if (currentPlayer === "BLACK") {
                                            playerMoveContext?.addFirstPlayerMoves(move);
                                        }
                                        else {
                                            playerMoveContext?.addSecondPlayerMoves(move);
                                        }
                                    }
                    );
                    if (capturePiece) {
                        capturePiece.changeOpacity(tl.current as GSAPTimeline, 0, () => {});
                        piece?.explodeRing(tl.current as GSAPTimeline, () => {
                                        const currentPlayer = state.currentPlayer;
                                        const nextPlayer = currentPlayer === "BLACK" ? "WHITE" : "BLACK";
                                        setState({
                                            ...state, 
                                            board: moveResponse.state,
                                            currentPlayer: nextPlayer
                                        });
                                        if (moveResponse.gameOver) {
                                            gameOverContext?.handleGameOver(true);
                                        }
                                        if (thinkingContext) {
                                           thinkingContext.handleFirstPlayerThinking(nextPlayer === "BLACK");
                                        }
                                        if (currentPlayer === "BLACK") {
                                            playerMoveContext?.addFirstPlayerMoves(move);
                                        }
                                        else {
                                            playerMoveContext?.addSecondPlayerMoves(move);
                                        }
                        });
                    }

                });
            }
        }
        return () => {
            if (tl.current) {
                tl.current.kill();
                tl.current = null;
            }
        }
    }, [state]);
    
    return (

        <BoardContext
            value={board}
        >
            <ValidateUserMoveContext
                value={validateUserMove}
            >
                <CellCoordinateContext
                    value={cellCoordinates}
                >
                    <DraggableContext
                        value={
                            {
                                isBlackDraggable: blackDraggable,
                                isWhiteDraggable: whiteDraggable
                            }
                        }
                    >
                        <svg viewBox="0 0 400 400" 
                            className="w-full"
                        >
                            {board && board.renderCell()}
                            {board && board.renderPiece()}
                        </svg>
                    </DraggableContext>
                </CellCoordinateContext>
            </ValidateUserMoveContext>
        </BoardContext>
    );
};

export default Board;