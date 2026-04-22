export class PixelEntity {
    public row: number;
    public col: number;
    public dom: HTMLDivElement | null = null;
    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }
}