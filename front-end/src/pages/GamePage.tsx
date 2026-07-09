import { useContext, useEffect } from "react";
import TransitionContext from "../contexts/TransitionContext";
import Board from "../chess/Board";

const GamePage = () => {
    const transitionContext = useContext(TransitionContext);
    
    useEffect(() => {
        if (transitionContext) {
            transitionContext.handleTransition(false);
        }
    }, []);
    return (
        <div>
            <Board/>
        </div>
    );
};

export default GamePage;