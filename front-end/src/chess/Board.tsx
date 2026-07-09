const Board = () => {
    return (
        <svg viewBox="0 0 500 500" 
            className="border-2 max-w-[50vw] h-screen"
        >
            <rect
                width={50}
                height={50}
                fill="red"

                x={0}
                y={100}
            />
        </svg>
    );
};

export default Board;