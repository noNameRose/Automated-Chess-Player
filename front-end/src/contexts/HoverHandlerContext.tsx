import { createContext } from "react";
import type { Player } from "../../public/static/options";


type Handlers = {
    hoverHandler1: (name: Player) => void,
    hoverHandler2: (name: Player) => void
}

const HoverHandlerContext = createContext<Handlers | null>(null);

export default HoverHandlerContext;