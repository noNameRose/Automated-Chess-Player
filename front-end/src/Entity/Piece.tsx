export class Piece {
    public x: number;
    public y: number;
    public isBlack: boolean;
    public dom!: HTMLDivElement;
    
    constructor(x: number, y: number, isBlack: boolean) {
        this.x = x;
        this.y = y;
        this.isBlack = isBlack;
    }    
}