import { createContext } from "react";

type GameOver = {
    isGameOver: boolean,
    handleGameOver: (isGameOver: boolean) => void
}

const GameOverContext = createContext<GameOver | null>(null);

export default GameOverContext;