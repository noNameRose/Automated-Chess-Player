import { useContext, useEffect } from "react";
import TransitionContext from "../contexts/TransitionContext";

const GamePage = () => {
    const transitionContext = useContext(TransitionContext);
    
    useEffect(() => {
        if (transitionContext) {
            transitionContext.handleTransition(false);
        }
    }, []);
    return (
        <div>
            Game Page
        </div>
    );
};

export default GamePage;