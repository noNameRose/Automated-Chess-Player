import { useState } from "react";
import type { PieceString } from "../../public/static/chessConfig";

type PlayerString = "Claude 1" | "Claude 2" | "ChatGPT 1" | "ChatGPT 2"
                    | "Random 1" | "Random 2" | "Human 1" | "Human 2"
                    | "Claude" | "Human" | "ChatGPT" | "Human"                    
;

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

    
    return (
        <svg viewBox="0 0 500 500" 
            className="border-2 w-screen h-screen"
        >
            <rect
                width={50}
                height={50}
                fill="red"

                x={0}
                y={100}
            />
        </svg>
    );
};

export default Board;