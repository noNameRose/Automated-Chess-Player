import { useContext, useEffect, useState } from "react";
import TransitionContext from "../contexts/TransitionContext";
import Board from "../chess/Board";
import { useParams } from "react-router-dom";
import type { PlayerString } from "../../public/static/chessConfig";
import TrackingPanel from "../components/TrackingPanel";
import ThinkingContext from "../contexts/ThinkingContext";
import GameOverContext from "../contexts/GameOverContext";
import PlayerMovesContexts from "../contexts/PlayerMovesContext";

const GamePage = () => {
    const transitionContext = useContext(TransitionContext);
    const {firstPlayer, secondPlayer} = useParams<{firstPlayer: PlayerString, secondPlayer: PlayerString}>();
    const [isFirstPlayerThinking, setIsFirstPlayerThinking] = useState<boolean>(false);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [firstPlayerMoves, setFirstPlayerMoves] = useState<string[]>(["d3", "nxd3"]);
    const [secondPlayerMoves, setSecondPlayerMoves] = useState<string[]>(["d6", "Qxe6"]);

    const addFirstPlayerMove = (move: string) => {
        const moves = [...firstPlayerMoves];
        moves.push(move);
        setFirstPlayerMoves(moves);
    }
    
    const addSecondPlayerMove = (move: string) => {
        const moves = [...secondPlayerMoves];
        moves.push(move);
        setSecondPlayerMoves(moves);
    }

    useEffect(() => {
        if (transitionContext) {
            transitionContext.handleTransition(false);
        }
    }, []);
    return (
        <PlayerMovesContexts
            value={
                {
                    firstPlayerMoves: firstPlayerMoves,
                    secondPlayerMoves: secondPlayerMoves,
                    addFirstPlayerMoves: addFirstPlayerMove,
                    addSecondPlayerMoves: addSecondPlayerMove
                }
            }
        >
            <GameOverContext
                value={
                    {
                        isGameOver: isGameOver,
                        handleGameOver: setIsGameOver
                    }
                }
            >
                <div className="max-w-260 
                                min-h-screen 
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
                    <ThinkingContext
                        value={
                            {
                                firstPlayerThinking: isFirstPlayerThinking,
                                handleFirstPlayerThinking: setIsFirstPlayerThinking
                            }
                        }
                    >
                        <Board
                            firstPlayer={firstPlayer as PlayerString}
                            secondPlayer={secondPlayer as PlayerString}
                        />
                        <TrackingPanel
                            firstPlayer={firstPlayer as PlayerString}
                            secondPlayer={secondPlayer as PlayerString}
                        />
                    </ThinkingContext>
                </div>
            </GameOverContext>
        </PlayerMovesContexts>
    );
};

export default GamePage;