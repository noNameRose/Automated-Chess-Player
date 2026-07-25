import { useContext, useEffect, useRef } from "react";
import ThinkingContext from "../../contexts/ThinkingContext";
import gsap from "gsap";

const ThinkingLoading = ({firstPlayer}: {firstPlayer: boolean}) => {
    const thinkingContext = useContext(ThinkingContext);
    const dotStyle = "w-[10px] h-[10px] bg-black rounded-[50%]";
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
        if (thinkingContext?.firstPlayerThinking === firstPlayer) {
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
                opacity: 1
            }
        }>
            <div ref={dot1} className={dotStyle}></div>
            <div ref={dot2} className={dotStyle}></div>
            <div ref={dot3} className={dotStyle}></div>
        </div>
    );
};

export default ThinkingLoading;