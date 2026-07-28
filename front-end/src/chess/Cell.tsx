import { CELL_DIMENSION } from "../../public/static/chessConfig";
import type { CellEntity } from "./core/CellEntity";

const Cell = ({cell}: {cell: CellEntity}) => {
    return (
        <g
            transform={`translate(${cell.x}, ${cell.y})`}
        >
            <rect
                width={CELL_DIMENSION}
                height={CELL_DIMENSION}
                fill={cell.fill}
            />
            {cell.col === 0 && (
                <text
                    dominantBaseline="middle"
                    textAnchor="middle"
                    x={-CELL_DIMENSION/2}
                    fontWeight={"bold"}
                    y={CELL_DIMENSION/2}
                >
                   {8 - cell.row}
                </text>
            )}
        </g>
    );
};

export default Cell;