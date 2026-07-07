import gsap from "gsap";
import { useEffect, useRef, useState, type ReactNode } from "react";
import TransitionContext from "../contexts/TransitionContext";

const PixelTransition = ({children}: {children: ReactNode}) => {
    const [isShow, setShow] = useState<Boolean>(false);
    const [toPage, setToPage] = useState<string | null>(null);
    const pixelContainer = useRef<HTMLDivElement | null>(null);
    const initialDelay = useRef<number | null>(1);


    useEffect(() => {
        if (isShow) {
            gsap.set(pixelContainer.current, {
                zIndex: 200
            });    
            gsap.to(document.querySelectorAll("#pixel"), {
                transform: "scale(1.2)",
                stagger: {
                    grid: "auto",
                    amount: 0.7,
                    from: "center"
                },
                
            });

        }
        else {
            gsap.to(document.querySelectorAll("#pixel"), {
                transform: "scale(0)",
                delay: initialDelay.current ? initialDelay.current : 0,
                stagger: {
                    grid: "auto",
                    amount: 0.7,
                    from: "center",
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
                        gridTemplateColumns: "repeat(auto-fit, clamp(25px, 5vw, 500px))",
                        gridTemplateRows: "repeat(auto-fit, clamp(25px, 5vw, 500px))",
                    }
                }
            >
                {(new Array(500)).fill(null).map(_ => (
                    <div 
                        id="pixel"
                        className="bg-black"
                        style={{
                            transform: "scale(1)",
                            
                        }}
                    >
                    </div>
                ))}
            </div>
            <TransitionContext value={{
                handleTransition: setShow
            }}>
                {children}
            </TransitionContext>
        </>
    );
};

export default PixelTransition;