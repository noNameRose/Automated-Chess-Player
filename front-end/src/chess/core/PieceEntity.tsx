import {type PieceColor, type PieceString, type PieceType} from "../../../public/static/chessConfig"
import type { CellEntity } from "./CellEntity";

export class PieceEntity {
    public name: PieceString;
    public x: number;
    public y: number;
    public row: number;
    public col: number;
    public type: PieceType;
    public fill: PieceColor;
    public container!: SVGGElement | null;
    
    private constructor(name: PieceString, x: number, y: number, row: number, col: number, fill: PieceColor) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.row = row;
        this.col = col;
        this.type = name.substring(1) as PieceType;
        this.fill = fill;
    }

    public moveToCell(tl: GSAPTimeline, cell: CellEntity, handleComplete?: () => void): void {
        tl.to(this.container, {
            attr: {
                transform: `translate(${cell.x}, ${cell.y})`
            },
            ease: "back.inOut",
            onComplete: handleComplete
        });
    }

    public static Builder() {
        return new this.PieceBuilder();
    }

    static PieceBuilder = class {
        private _name!: PieceString;
        private _x!: number;
        private _y!: number;
        private _row!: number;
        private _col!: number;
        private _fill!: PieceColor;

        public name(name: PieceString) {
            this._name = name;
            return this;
        }

        public x(x: number) {
            this._x = x;
            return this;
        }

        public y(y: number) {
            this._y = y;
            return this;
        }

        public row(row: number) {
            this._row = row;
            return this;
        }

        public col(col: number) {
            this._col = col;
            return this;
        }

        public fill(color: PieceColor) {
            this._fill = color;
            return this;
        }

        public build(): PieceEntity {
            return new PieceEntity(this._name, this._x, this._y, this._row, this._col, this._fill);
        }
    }
}