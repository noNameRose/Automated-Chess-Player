import gsap from "gsap";
import { useEffect, useRef, useState, type ReactNode } from "react";
import TransitionContext from "../contexts/TransitionContext";
import { useNavigate } from "react-router-dom";
import TitleContext from "../contexts/TitleContext";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText)

const PixelTransition = ({children}: {children: ReactNode}) => {
    const [isShow, setShow] = useState<boolean>(false);
    const [toPage, setToPage] = useState<string | null>(null);
    const [callBack, setCallBack] = useState<(() => void) | null>(null);
    const pixelContainer = useRef<HTMLDivElement | null>(null);
    const initialDelay = useRef<number | null>(1);
    const title = useRef<HTMLHeadingElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isShow) {
            gsap.to(".character", 
            {
                delay: 0.2,
                y: 300,
                duration: 0.8,
                stagger: {
                    amount: 0.2
                },
                ease: "back.in",
            });
            gsap.set(pixelContainer.current, {
                zIndex: 200
            });    
            gsap.to(document.querySelectorAll("#pixel"), {
                transform: "scale(1.2)",
                stagger: {
                    grid: "auto",
                    amount: 0.7,
                    from: [0.5, 0.3]
                },
                onComplete: () => {
                    if (toPage)
                        navigate(toPage);
                    if (callBack) {
                        callBack();
                    }
                    
                }
            });

        }
        else {
            gsap.to(".character", 
            {
                delay: 0.2,
                y: 0,
                duration: 0.8,
                stagger: {
                    amount: 0.2
                },
                ease: "back.out"
            });
            gsap.to(document.querySelectorAll("#pixel"), {
                transform: "scale(0)",
                delay: initialDelay.current ? initialDelay.current : 0,
                stagger: {
                    grid: "auto",
                    amount: 0.7,
                    from: [0.5, 0.3],
                },
                onComplete: () => {
                    initialDelay.current = 0;
                    gsap.set(pixelContainer.current, {
                            zIndex: -100,
                    });
                }
            });
        }
    }, [isShow]);

    return (
        <>
            <div 
                ref={pixelContainer}
                className="w-screen min-h-screen fixed grid z-100"
                style={
                    {
                        gridTemplateColumns: "repeat(15, 1fr)",
                        gridTemplateRows: "repeat(15, 1fr)",
                    }
                }
            >
                {(new Array(225)).fill(null).map((_, index)=> (
                    <div 
                        key={index}
                        id="pixel"
                        className="bg-black"
                        style={{
                            transform: "scale(1.2)",
                            willChange: "transform"
                            
                        }}
                    >
                    </div>
                ))}
            </div>
            <TitleContext
                value={title}
            >
                <TransitionContext value={{
                    isShow: isShow,
                    handleTransition: setShow,
                    toPage: setToPage,
                    handleComplete: setCallBack
                }}>
                    {children}
                </TransitionContext>
            </TitleContext>
        </>
    );
};

export default PixelTransition;