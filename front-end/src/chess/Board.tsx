import { useEffect, useRef, useState } from "react";
import type { PieceString, PlayerString } from "../../public/static/chessConfig";
import { BoardEntity } from "./core/BoardEntity";
import type { CellEntity } from "./core/CellEntity";
import gsap from "gsap";
import DraggableContext from "../contexts/DraggableContext";
import type { coordinate } from "../contexts/CellCoordinatesContext";
import CellCoordinateContext from "../contexts/CellCoordinatesContext";
import ValidateUserMoveContext from "../contexts/ValidateUserMoveContext";
import BoardContext from "../contexts/BoardContext";


type PieceStringBoard = (PieceString | null)[][]

type StateResponse = {
    state: PieceStringBoard
}

type MoveResponse = {
    state: PieceStringBoard,
    from: number[],
    to: number[],
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
    gameOver: boolean
}

type GameState = {
    board: (PieceStringBoard | null),
    currentPlayer: "BLACK" | "WHITE" | null,
    winner: PlayerString | null,
    isGameOver: boolean,
    atStart: boolean,
};

type BoardProp = {
    firstPlayer: PlayerString,
    secondPlayer: PlayerString
}

const Board = ({firstPlayer, secondPlayer}: BoardProp) => {
    const URL = "http://localhost:8080/game";
    const tl = useRef<GSAPTimeline | null>(null);
    const [state, setState] = useState<GameState>({
                                                    board: null,
                                                    isGameOver: false,
                                                    atStart: true,
                                                    winner: null,
                                                    currentPlayer: null
    });
    let blackDraggable = false;
    let whiteDraggable = false;
    if (firstPlayer === "Human") {
        blackDraggable = true;
    }
    if (secondPlayer === "Human") {
        whiteDraggable = true;
    }

    let board: BoardEntity | null = null;
    let cellCoordinates: coordinate[] | null = null;
    if (state.board) {
        board = BoardEntity.parse(state.board, firstPlayer, secondPlayer);
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
            setState({
                ...state,
                isGameOver: resBody.gameOver,
                board: resBody.state,
                currentPlayer: state.currentPlayer === "BLACK" ? "WHITE" : "BLACK"
            });
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
            currentPlayer: "BLACK"
        });
    };

    const fetchMove = async (): Promise<MoveResponse> => {
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
        if (state.isGameOver) {
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
                    const piece = board?.getPiece(fromCell[0], fromCell[1]);
                    const cell = board?.getCell(toCell[0], toCell[1]);
                    const capturePiece = board?.getPiece(toCell[0], toCell[1]);
                    piece?.moveToCell(tl.current as GSAPTimeline, 
                                    cell as CellEntity,
                                    capturePiece ? () => {} : () => {
                                        setState({
                                            ...state, 
                                            isGameOver: moveResponse.gameOver,
                                            board: moveResponse.state,
                                            currentPlayer: state.currentPlayer === "BLACK" ? "WHITE" : "BLACK"
                                        });
                                    }
                    );
                    if (capturePiece) {
                        capturePiece.changeOpacity(tl.current as GSAPTimeline, 0, () => {});
                        piece?.explodeRing(tl.current as GSAPTimeline, () => {
                                        setState({
                                            ...state, 
                                            isGameOver: moveResponse.gameOver,
                                            board: moveResponse.state,
                                            currentPlayer: state.currentPlayer === "BLACK" ? "WHITE" : "BLACK"
                                        });
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
                        <svg viewBox="0 0 500 500" 
                            className="border-2 w-screen h-screen"
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