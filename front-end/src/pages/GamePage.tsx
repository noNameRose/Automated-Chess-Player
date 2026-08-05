import { useContext, useEffect, useRef, useState } from "react";
import TransitionContext from "../contexts/TransitionContext";
import Board from "../chess/Board";
import { useLocation, useParams } from "react-router-dom";
import type { PlayerString } from "../../public/static/chessConfig";
import TrackingPanel from "../components/TrackingPanel";
import ThinkingContext from "../contexts/ThinkingContext";
import GameOverContext from "../contexts/GameOverContext";
import PlayerMovesContexts from "../contexts/PlayerMovesContext";
import Button from "../components/Button";
import FetchingContext from "../contexts/FetchingContext";
import gsap from "gsap";
import FetchingLoading from "../components/loading/FetchingLoading";

const GamePage = () => {
    const transitionContext = useContext(TransitionContext);
    const {firstPlayer, secondPlayer} = useParams<{firstPlayer: PlayerString, secondPlayer: PlayerString}>();
    const [isFirstPlayerThinking, setIsFirstPlayerThinking] = useState<boolean>(false);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [firstPlayerMoves, setFirstPlayerMoves] = useState<string[]>([]);
    const [secondPlayerMoves, setSecondPlayerMoves] = useState<string[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const loadingRef = useRef<HTMLDivElement | null>(null);
    const loadingTl = useRef<GSAPTimeline | null>(null);
    const loc = useLocation();

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
        loadingTl.current = gsap.timeline();

        return () => {
            if (loadingTl.current) {
                loadingTl.current.revert();
                loadingTl.current = null;
            }
        }
    }, [])

    useEffect(() => {
        if (isFetching) {
            loadingTl.current?.to(loadingRef.current, {
                zIndex: 200
            }).to(loadingRef.current, {
                opacity: 1
            })
            return;
        }
        // if (transitionContext?.isShow && !isFetching) {
        //     transitionContext.handleTransition(false);
        //     loadingTl.current?.to(loadingRef.current, {
        //         opacity: 0
        //     }).to(loadingRef.current, {
        //         zIndex: -200
        //     })
        // }
    }, [isFetching]);

    return (
        <FetchingContext
            value={
                {
                    isFetching: isFetching,
                    handleFetching: setIsFetching
                }
            }
        >
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
                            <div className="w-full sm:w-[60%] flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <Button
                                        button={
                                            {
                                                onClick: () => {
                                                    if (transitionContext) {
                                                        transitionContext.handleTransition(true);
                                                        transitionContext.toPage(`/`);
                                                    }
                                                }
                                            }
                                        }
                                    >
                                        Home
                                    </Button>
                                    <Button
                                        button={
                                            {
                                                onClick: () => {
                                                    if (transitionContext) {
                                                        transitionContext.handleTransition(true);
                                                        transitionContext.toPage(loc.pathname);
                                                        transitionContext.handleComplete(() => () => location.reload())
                                                    }
                                                }
                                            }
                                        }
                                    >
                                        Restart
                                    </Button>
                                </div>
                                <Board
                                    firstPlayer={firstPlayer as PlayerString}
                                    secondPlayer={secondPlayer as PlayerString}
                                />
                            </div>
                            <TrackingPanel
                                firstPlayer={firstPlayer as PlayerString}
                                secondPlayer={secondPlayer as PlayerString}
                            />
                        </ThinkingContext>
                        <FetchingLoading
                            loadingRef={loadingRef}
                        />
                    </div>
                </GameOverContext>
            </PlayerMovesContexts>
        </FetchingContext>
    );
};

export default GamePage;