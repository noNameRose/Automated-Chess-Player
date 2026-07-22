import { createContext } from "react";

type PlayerThinking = {
    firstPlayerThinking: boolean,
    secondPlayerThinking: boolean,
    handleFirstPlayerThinking: (isFirstPlayerThinking: boolean) => void,
    handleSecondPlayerThinking: (isSecondPlayerThinkning: boolean) => void
};

const ThinkingContext = createContext<PlayerThinking | null>(null);

export default ThinkingContext;