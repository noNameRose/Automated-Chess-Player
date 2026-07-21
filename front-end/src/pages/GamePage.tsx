import { useContext, useEffect } from "react";
import TransitionContext from "../contexts/TransitionContext";
import Board from "../chess/Board";
import { useParams } from "react-router-dom";
import type { PlayerString } from "../../public/static/chessConfig";
import TrackingPanel from "../components/TrackingPanel";

const GamePage = () => {
    const transitionContext = useContext(TransitionContext);
    const {firstPlayer, secondPlayer} = useParams<{firstPlayer: PlayerString, secondPlayer: PlayerString}>();

    useEffect(() => {
        if (transitionContext) {
            transitionContext.handleTransition(false);
        }
    }, []);
    return (
        <div className="max-w-260 min-h-screen border-2 mx-auto overflow-hidden">
            <Board
                firstPlayer={firstPlayer as PlayerString}
                secondPlayer={secondPlayer as PlayerString}
            />
            <TrackingPanel/>
        </div>
    );
};

export default GamePage;