export type PieceString = "BP" | "BR" | "BQ" | "BKI" | "BK" | "BB" 
                  | "WP" | "WR" | "WQ" | "WKI" | "WK" | "WB";

export type PieceType = "P" | "R" | "Q" | "KI" | "K" | "B";

export type PlayerString = "Human" | "Claude" | "ChatGPT" | "Random";

export const CELL_DIMENSION = 50;
export const PIECE_DIMENSION = CELL_DIMENSION;

type CHATGPT_CELL_FILL = "#BD674C";
type CLAUDE_CELL_FILL = "#4FBDA1";
type RANDOM_CELL_FILL = "#4B73BD";

export const CellFill = {
    "Claude": "#BD674C",
    "ChatGPT": "#4FBDA1",
    "Random": "#4B73BD",
    "Human": "fasdf"
};

export type CellColor = CHATGPT_CELL_FILL | CLAUDE_CELL_FILL | RANDOM_CELL_FILL;


