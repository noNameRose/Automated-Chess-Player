import { useEffect, useState } from "react";
import type { PieceString } from "../../public/static/chessConfig";
import { BoardEntity } from "./core/BoardEntity";

export type PlayerString = "Claude" | "ChatGPT" | "Random" | "Human";          

const initialState: (PieceString | null)[][] = [
    ["BR",  "BK",  "BB",  "BQ",  "BKI", "BB",  "BK",  "BR"],
    ["BP",  "BP",  "BP",  "BP",  "BP",  "BP",  "BP",  "BP"],
    [null,  null,  null,  null,  null,  null,  null,  null],
    [null,  null,  null,  null,  null,  null,  null,  null],
    [null,  null,  null,  null,  null,  null,  null,  null],
    [null,  null,  null,  null,  null,  null,  null,  null],
    ["WP",  "WP",  "WP",  "WP",  "WP",  "WP",  "WP",  "WP"],
    ["WR",  "WK",  "WB",  "WQ",  "WKI", "WB",  "WK",  "WR"]
];

type StateResponse = {
    state: (PieceString | null)[][]
}

type GameState = {
    board: (PieceString | null)[][] | null,
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
    const URL = "http://localhost:8080/game"
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
            atStart: false
        });
        
    }

    useEffect(() => {
        // Fetch board at the beginning of a new game
        if (state.atStart) {
            fetchBoardState()
        }
        else {

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