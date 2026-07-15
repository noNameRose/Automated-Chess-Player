import { createContext } from "react";
import type { BoardEntity } from "../chess/core/BoardEntity";

const BoardContext = createContext<BoardEntity | null>(null);

export default BoardContext;