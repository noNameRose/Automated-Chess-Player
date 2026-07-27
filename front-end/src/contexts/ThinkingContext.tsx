import { createContext } from "react";

type PlayerThinking = {
    firstPlayerThinking: boolean,
    handleFirstPlayerThinking: (isFirstPlayerThinking: boolean) => void,
};

const ThinkingContext = createContext<PlayerThinking | null>(null);

export default ThinkingContext;