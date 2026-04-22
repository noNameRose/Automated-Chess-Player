export class Piece {
    public x: number;
    public y: number;
    public name: string;
    public isBlack: boolean;
    public container: SVGGElement | null = null;
    
    
    constructor(name: string, x: number, y: number, isBlack: boolean) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.isBlack = isBlack;
    }    
}