import { createContext } from "react";
import type { Player } from "../../public/static/options";


type Handlers = {
    hoverHandler1: (name: Player) => void,
    hoverHandler2: (name: Player) => void,
    mouseOutHandler1: () => void;
    mouseOutHandler2: () => void;
    clickHandler1: () => void;
    clickHandler2: () => void;
}

const MouseEventContext = createContext<Handlers | null>(null);

export default MouseEventContext;