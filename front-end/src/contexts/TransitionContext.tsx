import { createContext } from "react";

type transition = {
    handleTransition: () => void
}

const TransitionContext = createContext<transition | null>(null);

export default TransitionContext;