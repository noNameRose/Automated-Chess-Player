import type { ReactNode } from "react";
import { BlackCellFill, BlackPieceFill, BlackPieceStroke, CELL_DIMENSION, PIECE_DIMENSION, WhiteCellFill, WhitePieceFill, WhitePieceStroke, type CellColor, type PieceColor, type PieceString, type PlayerString } from "../../../public/static/chessConfig";
import { CellEntity } from "./CellEntity";
import { PieceEntity } from "./PieceEntity";
import Cell from "../Cell";
import Piece from "../Piece";
import type { coordinate } from "../../contexts/CellCoordinatesContext";

export class BoardEntity {  
    public startX: number = 0;
    public startY: number = 0;
    public rows: number = 8;
    public cols: number = 8;
    public cells: CellEntity[][] = [];
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
                    color = (j % 2 === 0) ? BlackCellFill[firstPlayer] : WhiteCellFill[secondPlayer];
                }
                else {
                    color = (j % 2 === 0) ? WhiteCellFill[secondPlayer] : BlackCellFill[firstPlayer];
                }
                const cell: CellEntity = CellEntity
                                            .Builder()
                                            .row(i)
                                            .col(j)
                                            .x(this.startX + (CELL_DIMENSION * j))
                                            .y(this.startY + (CELL_DIMENSION * i))
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
                    const isBlack = name[0] === "B";
                    const color = isBlack ? BlackPieceFill[firstPlayer] : WhitePieceFill[secondPlayer];
                    const stroke = isBlack ? BlackPieceStroke[firstPlayer] : WhitePieceStroke[secondPlayer];
                    const piece = PieceEntity.Builder()
                                  .name(name)
                                  .row(i)
                                  .col(j)
                                  .x(cell.x + CELL_DIMENSION/2 - PIECE_DIMENSION/2)
                                  .y(cell.y + CELL_DIMENSION/2 - PIECE_DIMENSION/2)
                                  .fill(color as PieceColor)
                                  .stroke(stroke)
                                  .build();
                    row.push(piece);
                }
            }
            board.pieces.push(row);
        }
        return board;
    }

    public getCellCoordinates(): coordinate[] {
        const coordinates = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                coordinates.push({
                    x: this.cells[i][j].pieceX,
                    y: this.cells[i][j].pieceY
                });
            }
        }
        return coordinates;
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

    public renderPiece(): ReactNode[] {
        const pieces = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const pieceEntity = this.pieces[i][j];
                if (pieceEntity)
                    pieces.push(<Piece piece={pieceEntity} key={crypto.randomUUID()}/>)
            }
        }
        return pieces;
    }
    
}