import { createContext } from "react";

type PlayerMovesProp = {
    firstPlayerMoves: string[],
    secondPlayerMoves: string[]
}

const PlayerMovesContexts = createContext<PlayerMovesProp | null>(null);

export default PlayerMovesContexts;