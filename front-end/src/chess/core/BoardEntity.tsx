import type { ReactNode } from "react";
import { CELL_DIMENSION, CellFill, type CellColor, type PieceString } from "../../../public/static/chessConfig";
import { CellEntity } from "./CellEntity";
import { PieceEntity } from "./PieceEntity";
import Cell from "../Cell";
import type { PlayerString } from "../Board";

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

    constructor(firstPlayer: PlayerString, secondPlayer: PlayerString) {
        // Initialize cell entity
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.cols; j++) {
                let color;
                if (i % 2 === 0) {
                    color = (j % 2 === 0) ? CellFill[firstPlayer] : CellFill[secondPlayer];
                }
                else {
                    color = (j % 2 === 0) ? CellFill[secondPlayer] : CellFill[firstPlayer];
                }
                const cell: CellEntity = CellEntity
                                            .Builder()
                                            .row(i)
                                            .col(j)
                                            .x(this.startX + (CELL_DIMENSION * i))
                                            .y(this.startY + (CELL_DIMENSION * j))
                                            .fill(color as CellColor)
                                            .build();
                row.push(cell);
            }
            this.cells.push(row);
        }
    }

    public static parse(state: (PieceString | null)[][], firstPlayer: PlayerString, secondPlayer: PlayerString): BoardEntity {
        const nRow = state.length;
        const nCol = state[0].length;
        const board = new BoardEntity(firstPlayer, secondPlayer);
        for (let i = 0; i < nRow; i++) {
            const row = [];
            for (let j = 0; j < nCol; j++) {
                const name = state[i][j];
                const cell = board.getCell(i, j);
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

    public renderCell(): ReactNode[] {
        const cells = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                cells.push(<Cell cell={this.cells[i][j]}/>)
            }
        }
        return cells;
    }
    
}