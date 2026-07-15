import { createContext } from "react";

export type coordinate = {
    x: number,
    y: number
};

const CellCoordinateContext = createContext<coordinate[] | null>(null);

export default CellCoordinateContext;