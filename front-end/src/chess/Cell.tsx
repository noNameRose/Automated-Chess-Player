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
                    dominantBaseline="hanging"
                    textAnchor="start"
                    x={5}
                    fontWeight={"bold"}
                    y={5}
                    fontSize={10}
                    fill={cell.rankColor}
                >
                   {8 - cell.row}
                </text>
            )}
            {cell.row === 7 && (
                <text
                    fontSize={10}
                    dominantBaseline="text-after-edge"
                    textAnchor="end"
                    y={CELL_DIMENSION}
                    x={CELL_DIMENSION}
                    fill={cell.rankColor}
                >
                    {String.fromCharCode("a".charCodeAt(0) + cell.col)}
                </text>
            )}
        </g>
    );
};

export default Cell;