type PixelConfig = {
    row: number,
    col: number,
    width: string,
    height: string
}

const Pixel = ({row, col, width, height}: PixelConfig) => {
    return (
        <div
            className="bg-blue-200 absolute border-2"
            style={
                {
                    width: `calc(${width})`,
                    height: `calc(${height})`,
                    left: `calc(${row} * ${width})`,
                    top: `calc(${col} * ${height})`
                }
            }
        ></div>
    );
};

export default Pixel;