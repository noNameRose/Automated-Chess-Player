export class PixelEntity {
    public row: number;
    public col: number;
    public isGlitter: boolean;
    public notChangeColor: boolean;
    public dom: HTMLDivElement | null = null;
    
    constructor(row: number, col: number, notChangeColor: boolean, isGlitter: boolean) {
        this.row = row;
        this.col = col;
        this.notChangeColor = notChangeColor;
        this.isGlitter = isGlitter;
    }
}