import { useEffect, useState } from "react";
import type { PieceString } from "../../public/static/chessConfig";
import { BoardEntity } from "./core/BoardEntity";

export type PlayerString = "Claude" | "ChatGPT" | "Random" | "Human"; 

type PieceStringBoard = (PieceString | null)[][]

type StateResponse = {
    state: PieceStringBoard
}

type MoveResponse = {
    state: PieceStringBoard,
    from: number[],
    to: number[],
    isGameOver: boolean
};

type MoveRequest = {
    state: PieceStringBoard,
    isBlack: boolean,
    playerName: PlayerString
};

type GameState = {
    board: (PieceStringBoard | null),
    currentPlayer: PlayerString | null,
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
    const [state, setState] = useState<GameState>({
                                                    board: null,
                                                    isGameOver: false,
                                                    atStart: true,
                                                    winner: null,
                                                    currentPlayer: null
    });

    let board: BoardEntity | null = null;
    if (state.board)
        board = BoardEntity.parse(state.board, firstPlayer, secondPlayer);

    const fetchBoardState = async () => {
        const response = await fetch(URL);
        const body = (await response.json()) as StateResponse;
        setState({
            ...state,
            board: body.state,
            atStart: false,
            currentPlayer: firstPlayer
        });
    };

    const fetchMove = async (): Promise<MoveResponse> => {
        const reqBody: MoveRequest = {
            state: state.board as PieceStringBoard,
            isBlack: (state.currentPlayer == firstPlayer),
            playerName: state.currentPlayer as PlayerString
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
    }

    useEffect(() => {
        // Fetch board at the beginning of a new game
        if (state.atStart) {
            fetchBoardState()
        }
        else {
            const promise = fetchMove();
            promise.then((moveResponse: MoveResponse) => {
                const fromCell = moveResponse.from;
                const toCell = moveResponse.to;
                const piece = board?.getPiece(fromCell[0], fromCell[1]);
                const cell = board?.getCell(toCell[0], toCell[1]);
            })
        }
    }, [state]);
    
    return (
        <svg viewBox="0 0 500 500" 
            className="border-2 w-screen h-screen"
        >
            {board && board.renderCell()}
            {board && board.renderPiece()}
        </svg>
    );
};

export default Board;