import { useState } from "react";
import type { PieceString } from "../../public/static/chessConfig";
import { BoardEntity } from "./core/BoardEntity";

export type PlayerString = "Claude" | "ChatGPT" | "Random" | "Human";          

const initialState: (PieceString | null)[][]= [
    ["BR",  "BK",  "BB",  "BQ",  "BKI", "BB",  "BK",  "BR"],
    ["BP",  "BP",  "BP",  "BP",  "BP",  "BP",  "BP",  "BP"],
    [null,  null,  null,  null,  null,  null,  null,  null],
    [null,  null,  null,  null,  null,  null,  null,  null],
    [null,  null,  null,  null,  null,  null,  null,  null],
    [null,  null,  null,  null,  null,  null,  null,  null],
    ["WP",  "WP",  "WP",  "WP",  "WP",  "WP",  "WP",  "WP"],
    ["WR",  "WK",  "WB",  "WQ",  "WKI", "WB",  "WK",  "WR"]
];

type GameState = {
    board: (PieceString | null)[][],
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
    const [state, setState] = useState<GameState>({
                                                    board: initialState,
                                                    isGameOver: false,
                                                    atStart: true,
                                                    winner: null,
                                                    currentPlayer: null
    });


    const board = BoardEntity.parse(state.board, firstPlayer, secondPlayer);

    
    return (
        <svg viewBox="0 0 500 500" 
            className="border-2 w-screen h-screen"
        >
            {board.renderCell()}
        </svg>
    );
};

export default Board;