import { createContext } from "react";

type Agent = "Claude" | "ChatGPT" | "Human" | "Random";

type Handlers = {
    hoverHandler1: (name: Agent) => void,
    hoverHandler2: (name: Agent) => void
}

const HoverHandlerContext = createContext<Handlers | null>(null);

export default HoverHandlerContext;