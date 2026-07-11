import { useContext, useEffect } from "react";
import TransitionContext from "../contexts/TransitionContext";
import Board from "../chess/Board";
import { useParams } from "react-router-dom";
import type { PlayerString } from "../../public/static/chessConfig";

const GamePage = () => {
    const transitionContext = useContext(TransitionContext);
    const {firstPlayer, secondPlayer} = useParams<{firstPlayer: PlayerString, secondPlayer: PlayerString}>();

    useEffect(() => {
        if (transitionContext) {
            transitionContext.handleTransition(false);
        }
    }, []);
    return (
        <div>
            <Board
                firstPlayer={firstPlayer as PlayerString}
                secondPlayer={secondPlayer as PlayerString}
            />
        </div>
    );
};

export default GamePage;