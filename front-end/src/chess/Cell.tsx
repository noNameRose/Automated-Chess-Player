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
        </g>
    );
};

export default Cell;