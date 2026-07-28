import { createContext } from "react";

type PlayerMovesProp = {
    firstPlayerMoves: string[],
    secondPlayerMoves: string[],
    addFirstPlayerMoves: (move: string) => void,
    addSecondPlayerMoves: (move: string) => void
}

const PlayerMovesContexts = createContext<PlayerMovesProp | null>(null);

export default PlayerMovesContexts;