import { createContext } from "react";
import type { Player } from "../../public/static/options";

type ChosenPlayer = {
    firstChosenPlayer: Player,
    secondChosenPlayer: Player
};

const ChosenPlayerContext = createContext<ChosenPlayer | null>(null);

export default ChosenPlayerContext;