export class Piece {
    public x: number;
    public y: number;
    public name: string;
    public isBlack: boolean;
    public container: SVGGElement | null = null;
    public wrapper: SVGGElement | null = null;
    
    
    constructor(name: string, x: number, y: number, isBlack: boolean) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.isBlack = isBlack;
    }    


    floating(tl: gsap.core.Timeline) : void {
        const DY = 100;
        tl.to(this.container, {
            attr: {
                transform: `translate(${this.x}, ${this.y + DY})`
            },
            repeat: -1,
            yoyo: true
        });
    }
}

