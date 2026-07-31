import { createContext } from "react";

type transition = {
    isShow: boolean,
    handleTransition: (show: boolean) => void,
    toPage: (url: string) => void
}

const TransitionContext = createContext<transition | null>(null);

export default TransitionContext;