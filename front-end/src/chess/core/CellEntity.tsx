import { CELL_DIMENSION, PIECE_DIMENSION, type CellColor } from "../../../public/static/chessConfig";

export class CellEntity {
    public x: number;
    public y: number;
    public row: number;
    public col: number;
    public dom: SVGGElement | null = null;
    public fill: CellColor;
    public rankColor: string;
    public pieceX: number;
    public pieceY: number;

    private constructor(x: number, y: number, row: number, col: number, fill: CellColor, rankColor: string) {
        this.x = x;
        this.y = y;
        this.row = row;
        this.col = col;
        this.fill = fill;
        this.pieceX = this.x + CELL_DIMENSION/2 - PIECE_DIMENSION/2;
        this.pieceY = this.y + CELL_DIMENSION/2 - PIECE_DIMENSION/2;
        this.rankColor = rankColor;
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
        private _rankColor!: string;

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

        public rankColor(rankColor: string) {
            this._rankColor = rankColor;
            return this;
        }

        public build(): CellEntity {
            return new CellEntity(this._x, this._y, this._row, this._col, this._fill, this._rankColor);
        }

    }
    
}
