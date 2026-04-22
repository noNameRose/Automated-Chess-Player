import { createContext } from "react";

export const TransitionContext = createContext<{isTransition: boolean, setIsTransition: (isTransition: boolean) => void} | null>(null);