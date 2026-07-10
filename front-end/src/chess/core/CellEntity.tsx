import type { CellColor } from "../../../public/static/chessConfig";

export class CellEntity {
    public x: number;
    public y: number;
    public row: number;
    public col: number;
    public dom: SVGGElement | null = null;
    public fill: CellColor;

    private constructor(x: number, y: number, row: number, col: number, fill: CellColor) {
        this.x = x;
        this.y = y;
        this.row = row;
        this.col = col;
        this.fill = fill;
    }

    public static Builder() {
        return new this.CellBuilder();
    }
    
    static CellBuilder = class {
        private _x!: number;
        private _y!: number;
        private _row!: number;
        private _col!: number;
        private _fill!: CellColor;

        public x(x: number) {
            this._x = x;
            return this;
        }

        public y(y: number) {
            this._y = y;
            return this;
        }

        public row(row: number){
            this._row = row;
            return this;
        }

        public col(col: number) {
            this._col = col;
            return this;
        }

        public fill(fill: CellColor) {
            this._fill = fill;
            return this;
        }

        public build(): CellEntity {
            return new CellEntity(this._x, this._y, this._row, this._col, this._fill);
        }

    }
    
}
