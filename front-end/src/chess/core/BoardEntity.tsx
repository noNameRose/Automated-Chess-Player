import { CELL_DIMENSION, type PieceString } from "../../../public/static/chessConfig";
import { CellEntity } from "./CellEntity";
import { PieceEntity } from "./PieceEntity";

export class BoardEntity {  
    private startX: number = 0;
    private startY: number = 0;
    private rows: number = 8;
    private cols: number = 8;
    private cells: CellEntity[][] = [];
    public pieces: (PieceEntity | null)[][] = [];

    public getPiece(row: number, col: number): PieceEntity | null{
        return this.pieces[row][col];
    }

    public getCell(row: number, col: number): CellEntity {
        return this.cells[row][col];
    }    

    public initializeCell(): void {
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.cols; j++) {
                const cell: CellEntity = CellEntity
                                            .Builder()
                                            .row(i)
                                            .col(j)
                                            .x(this.startX + (CELL_DIMENSION * i))
                                            .y(this.startY + (CELL_DIMENSION * j))
                                            .build();
                row.push(cell);
            }
            this.cells.push(row);
        }
    }

    public static parse(state: (PieceString | null)[][]): BoardEntity {
        const nRow = state.length;
        const nCol = state[0].length;
        const board = new BoardEntity();
        board.initializeCell();
        for (let i = 0; i < nRow; i++) {
            const row = [];
            for (let j = 0; j < nCol; j++) {
                const name = state[i][j];
                const cell = board.getPiece(i, j);
                if (!name) {
                    row.push(null);
                }
                else if (name && cell){
                    const piece = PieceEntity.Builder()
                                  .name(name)
                                  .row(i)
                                  .col(j)
                                  .x(cell.x)
                                  .y(cell.y)
                                  .build();
                    row.push(piece);
                }
            }
            board.pieces.push(row);
        }
        return board;
    }
    
}