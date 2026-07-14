export type PieceString = "BP" | "BR" | "BQ" | "BKI" | "BK" | "BB" 
                  | "WP" | "WR" | "WQ" | "WKI" | "WK" | "WB";

export type PieceType = "P" | "R" | "Q" | "KI" | "K" | "B";

export type PlayerString = "Human" | "Claude" | "ChatGPT" | "Random";

export const CELL_DIMENSION = 50;
export const PIECE_DIMENSION = CELL_DIMENSION;

type CHATGPT_CELL_FILL = "#BD674C";
type CLAUDE_CELL_FILL = "#4FBDA1";
type RANDOM_CELL_FILL = "#4B73BD";

type CHATGPT_PIECE_FILL = "#C9FFF2";
type CLAUDE_PIECE_FILL = "#FFD6C9";
type RANDOM_PIECE_FILL = "#C9DCFF";

type CellFill = {
    "Claude": string,
    "ChatGPT": string,
    "Random": string,
    "Human": string
}

export const BlackCellFill: CellFill = {
    "Claude": "#561500",
    "ChatGPT": "#00503C",
    "Random": "#001B4F",
    "Human": "fasdf"
};

export const WhiteCellFill: CellFill = {
    "Claude": "#FFD6C9",
    "ChatGPT": "#C9FFF2",
    "Random": "#C9DCFF",
    "Human": ""
};

export const BlackPieceFill = {
    "Claude": "#BD674C",
    "ChatGPT": "#4FBDA1",
    "Random": "#4B73BD",
    "Human": "fasdf"
};

export const WhitePieceFill = {
    "Claude": "#EEAE9A",
    "ChatGPT": "#9AEDD8",
    "Random": "#9AB7ED",
    "Human": ""
};

export type PieceColor = CHATGPT_PIECE_FILL | CLAUDE_PIECE_FILL | RANDOM_PIECE_FILL;
export type CellColor = CHATGPT_CELL_FILL | CLAUDE_CELL_FILL | RANDOM_CELL_FILL;


