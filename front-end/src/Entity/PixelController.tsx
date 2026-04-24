import { PixelEntity } from "./PixelEntity";

export class PixelController {
    public NUM_COL_PIXEL: number = 10;
    public NUM_ROW_PIXEL: number = 15;
    
    public LEFT_BOUND: number = 1;
    public RIGHT_BOUND: number = 8;
    public UPPER_BOUND: number = 1;
    public LOWER_BOUND: number = 5;
    public pixels: PixelEntity[] = [];

    constructor() {
        for (let i = 0; i < this.NUM_ROW_PIXEL; i++) {
            for (let j = 0;  j < this.NUM_COL_PIXEL; j++) {
                const isGlitter = (i >= this.UPPER_BOUND && i <= this.LOWER_BOUND && j == this.LEFT_BOUND) ||
                                  (i >= this.UPPER_BOUND && i <= this.LOWER_BOUND && j == this.RIGHT_BOUND) ||
                                  (j >= this.LEFT_BOUND && j <= this.RIGHT_BOUND && i == this.UPPER_BOUND) ||
                                  (j >= this.LEFT_BOUND && j <= this.RIGHT_BOUND && i == this.LOWER_BOUND)
                ;
                const notChangeColor =  j > this.LEFT_BOUND && j < this.RIGHT_BOUND && i > this.UPPER_BOUND && i < this.LOWER_BOUND;
                this.pixels.push(new PixelEntity(i, j, notChangeColor, isGlitter));
            }
        }
    }

    changeColor(tl: gsap.core.Timeline, color: string, callback: () => void) : void {

        tl.to(this.pixels.map(pixel => pixel.dom), {
            background: color,
            onComplete: callback
        });

    }
}