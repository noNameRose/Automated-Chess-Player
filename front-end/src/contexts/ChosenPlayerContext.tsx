import { createContext } from "react";
import type { Player } from "../../public/static/options";

const ChosenPlayerContext = createContext<Player | null>(null);

export default ChosenPlayerContext;