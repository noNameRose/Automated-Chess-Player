import { createContext } from "react";

type PlayerThinking = {
    firstPlayerThinking: boolean,
    secondPlayerThinking: boolean
}

const ThinkingContext = createContext<PlayerThinking | null>(null);

export default ThinkingContext;