import { PixelEntity } from "./PixelEntity";

export class PixelController {
    public NUM_COL_PIXEL: number = 20;
    public NUM_ROW_PIXEL: number = 20;
    public pixels: PixelEntity[] = [];

    constructor() {
        for (let i = 0; i < this.NUM_ROW_PIXEL; i++) {
            for (let j = 0;  j < this.NUM_COL_PIXEL; j++) {
                this.pixels.push(new PixelEntity(i, j));
            }
        }
    }
}