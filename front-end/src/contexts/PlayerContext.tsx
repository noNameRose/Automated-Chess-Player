import { createContext } from "react";

type Agent = "Claude" | "Human" | "Random" | "ChatGPT";

const PlayerContext = createContext<Agent | null>(null);

export default PlayerContext;