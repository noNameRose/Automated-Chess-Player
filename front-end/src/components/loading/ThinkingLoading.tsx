import { useContext, useEffect, useRef } from "react";
import ThinkingContext from "../../contexts/ThinkingContext";
import gsap from "gsap";

const ThinkingLoading = ({firstPlayer}: {firstPlayer: boolean}) => {
    const thinkingContext = useContext(ThinkingContext);
    const dom = useRef<HTMLDivElement | null>(null);

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
            style={
            {
                opacity: 0
            }
        }>Thinking....</div>
    );
};

export default ThinkingLoading;