import { createContext } from "react";
import type { Player } from "../../public/static/options";

const PlayerContext = createContext<Player | null>(null);

export default PlayerContext;