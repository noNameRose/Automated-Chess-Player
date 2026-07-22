import { useContext, useEffect, useState } from "react";
import TransitionContext from "../contexts/TransitionContext";
import Board from "../chess/Board";
import { useParams } from "react-router-dom";
import type { PlayerString } from "../../public/static/chessConfig";
import TrackingPanel from "../components/TrackingPanel";

const GamePage = () => {
    const transitionContext = useContext(TransitionContext);
    const {firstPlayer, secondPlayer} = useParams<{firstPlayer: PlayerString, secondPlayer: PlayerString}>();
    const [isFirstPlayerThinking, setIsFirstPlayerThinking] = useState<boolean>(false);
    const [isSecondPlayerThinking, setIsSeondPlayerThinking] = useState<boolean>(false);

    useEffect(() => {
        if (transitionContext) {
            transitionContext.handleTransition(false);
        }
    }, []);
    return (
        <div className="max-w-260 
                        min-h-screen 
                        border-2 
                        mx-auto 
                        overflow-hidden 
                        flex 
                        flex-col 
                        sm:flex-row
                        items-center
                        justify-center
                        gap-4
                        py-8
                        "
        >
            <Board
                firstPlayer={firstPlayer as PlayerString}
                secondPlayer={secondPlayer as PlayerString}
            />
            <TrackingPanel
                firstPlayer={firstPlayer as PlayerString}
                secondPlayer={secondPlayer as PlayerString}
            />
        </div>
    );
};

export default GamePage;