import Pixel from "./Pixel";

const NUM_HORIZONTAL_BOX = 18;
const NUM_VERTICAL_BOX = 15
;
type coordinate = {
    row: number,
    col: number
}


const PixelAnimator = () => {
    const arr: coordinate[] = [];
    
    for (let i = 0; i < NUM_HORIZONTAL_BOX; i++) {
        for (let j = 0; j < NUM_VERTICAL_BOX; j++) {
            arr.push({row: i, col: j});
        }
    }
    return (
        <div>
            {arr.map(({row, col}: coordinate) => (
                 <Pixel
                    row={row}
                    col={col}
                    width={`100vw/${NUM_HORIZONTAL_BOX}`}
                    height={`100vh/${NUM_VERTICAL_BOX}`}
                />
            ))}
        </div>
    );
}



export default  PixelAnimator;