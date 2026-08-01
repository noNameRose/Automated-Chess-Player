import { createContext } from "react";

type transition = {
    isShow: boolean,
    handleTransition: (show: boolean) => void,
    toPage: (url: string) => void,
    handleComplete: ((callback: () => void) => void)
}

const TransitionContext = createContext<transition | null>(null);

export default TransitionContext;