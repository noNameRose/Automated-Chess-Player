import { createContext } from "react";

type Agent = "Claude" | "Human" | "Random" | "Human";

const PlayerContext = createContext<Agent | null>(null);

export default PlayerContext;