export type PieceString = "BP" | "BR" | "BQ" | "BK" | "BN" | "BB" 
                  | "WP" | "WR" | "WQ" | "WK" | "WN" | "WB";

export type PieceType = "P" | "R" | "Q" | "K" | "N" | "B";

export type PlayerString = "Human" | "Claude" | "ChatGPT" | "Random" | "Alpha-Beta";

export const CELL_DIMENSION = 50;
export const PIECE_DIMENSION = CELL_DIMENSION/1.1;
export const PIECE_STROKE = PIECE_DIMENSION/2;

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
    "Human": string,
    "Alpha-Beta": string
}

export const BlackCellFill: CellFill = {
    "Claude": "#561500",
    "ChatGPT": "#00503C",
    "Random": "#001B4F",
    "Human": "#280057",
    "Alpha-Beta": "#570052"
    
};

export const WhiteCellFill: CellFill = {
    "Claude": "#FFD6C9",
    "ChatGPT": "#C9FFF2",
    "Random": "#C9DCFF",
    "Human": "#E2C9FF",
    "Alpha-Beta": "#FFC9FC"
};

export const BlackPieceFill = {
    "Claude": "#BD674C",
    "ChatGPT": "#4FBDA1",
    "Random": "#4B73BD",
    "Human": "#804BBD",
    "Alpha-Beta": "#BD4BB7"
};

export const WhitePieceFill = {
    "Claude": "#EEAE9A",
    "ChatGPT": "#9AEDD8",
    "Random": "#9AB7ED",
    "Human": "#C19AED",
    "Alpha-Beta": "#ED9AE9"
};

export const BlackPieceStroke = {
    "Claude": "#DE8D74",
    "ChatGPT": "#73DEC3",
    "Random": "#7398DE",
    "Human": "#A573DE",
    "Alpha-Beta": "#DE73D9"
};

export const WhitePieceStroke = {
    "Claude": "#BD674C",
    "ChatGPT": "#4FBDA1",
    "Random": "#4B73BD",
    "Human": "#804BBD",
    "Alpha-Beta": "#BD4BB7"
};

export type PieceColor = CHATGPT_PIECE_FILL | CLAUDE_PIECE_FILL | RANDOM_PIECE_FILL;
export type CellColor = CHATGPT_CELL_FILL | CLAUDE_CELL_FILL | RANDOM_CELL_FILL;


