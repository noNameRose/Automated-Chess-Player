export type PieceString = "BP" | "BR" | "BQ" | "BKI" | "BK" | "BB" 
                  | "WP" | "WR" | "WQ" | "WKI" | "WK" | "WB";

export const CELL_DIMENSION = 100;

type CHATGPT_CELL_FILL = "#4FBDA1";
type CLAUDE_CELL_FILL = "#4FBDA1";
type RANDOM_CELL_FILL = "#4B73BD";



export type CellColor = CHATGPT_CELL_FILL | CLAUDE_CELL_FILL | RANDOM_CELL_FILL;
