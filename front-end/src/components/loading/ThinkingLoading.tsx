import { useContext, useEffect, useRef } from "react";
import ThinkingContext from "../../contexts/ThinkingContext";
import gsap from "gsap";
import { BlackCellFill, type PlayerString } from "../../../public/static/chessConfig";
import GameOverContext from "../../contexts/GameOverContext";

const ThinkingLoading = ({firstPlayer, playerName}: {firstPlayer: boolean, playerName: PlayerString}) => {
    const thinkingContext = useContext(ThinkingContext);
    const dotStyle = "w-[10px] h-[10px] bg-black rounded-[50%]";
    const gameOverContext = useContext(GameOverContext);
    const dotCssStyle = {
        backgroundColor: BlackCellFill[playerName]
    };
    const tl = useRef<GSAPTimeline | null>(null);
    const dom = useRef<HTMLDivElement | null>(null);
    const dot1 = useRef<HTMLDivElement | null>(null);
    const dot2 = useRef<HTMLDivElement | null>(null);
    const dot3 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        tl.current = gsap.timeline({
            yoyo: true,
            repeat: -1
        });
        
        tl.current.to(dot1.current, {
            scale: 1.5,
        })
        .to(dot1.current, {
            scale: 1
        })
        .to(dot2.current, {
            scale: 1.5,
        }, "<")
        .to(dot2.current, {
            scale: 1
        })
        .to(dot3.current, {
            scale: 1.5,
        }, "<")
        .to(dot3.current, {
            scale: 1
        });

        return () => {
            tl.current = null;
        }
    }, []);

    useEffect(() => {
        if (thinkingContext?.firstPlayerThinking === firstPlayer && !gameOverContext?.isGameOver) {
            gsap.to(dom.current, {
                opacity: 1
            });
        }
        else {
            gsap.to(dom.current, {
                opacity: 0
            });
        }
    }, [thinkingContext]);

    return (
        <div 
            ref={dom}
            className="flex gap-4"
            style={
            {
                opacity: 0
            }
        }>
            <div ref={dot1} className={dotStyle} style={dotCssStyle}></div>
            <div ref={dot2} className={dotStyle} style={dotCssStyle}></div>
            <div ref={dot3} className={dotStyle} style={dotCssStyle}></div>
        </div>
    );
};

export default ThinkingLoading;