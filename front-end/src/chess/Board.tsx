import { useState } from "react";


type PieceString = "BP" | "BR" | "BQ" | "BKI" | "BK" | "BB" 
                  | "WP" | "WR" | "WQ" | "WKI" | "WK" | "WB";
type Piece = PieceString | null;

const initialState: Piece[][]= [
    ["BR",  "BK",  "BB",  "BQ",  "BKI", "BB",  "BK",  "BR"],
    ["BP",  "BP",  "BP",  "BP",  "BP",  "BP",  "BP",  "BP"],
    [null,  null,  null,  null,  null,  null,  null,  null],
    [null,  null,  null,  null,  null,  null,  null,  null],
    [null,  null,  null,  null,  null,  null,  null,  null],
    [null,  null,  null,  null,  null,  null,  null,  null],
    ["WP",  "WP",  "WP",  "WP",  "WP",  "WP",  "WP",  "WP"],
    ["WR",  "WK",  "WB",  "WQ",  "WKI", "WB",  "WK",  "WR"]
];

const Board = () => {
    const [board, setBoard] = useState<Piece[][] | null>(initialState);
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