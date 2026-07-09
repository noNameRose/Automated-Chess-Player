import gsap from "gsap";
import { useEffect, useRef, useState, type ReactNode } from "react";
import TransitionContext from "../contexts/TransitionContext";
import { useNavigate } from "react-router-dom";
import TitleContext from "../contexts/TitleContext";

const PixelTransition = ({children}: {children: ReactNode}) => {
    const [isShow, setShow] = useState<Boolean>(false);
    const [toPage, setToPage] = useState<string | null>(null);
    const pixelContainer = useRef<HTMLDivElement | null>(null);
    const initialDelay = useRef<number | null>(1);
    const title = useRef<HTMLHeadingElement | null>(null);
    const navigate = useNavigate();

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
                onComplete: () => {
                    if (toPage)
                        navigate(toPage);
                }
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
            <TitleContext
                value={title}
            >
                <TransitionContext value={{
                    handleTransition: setShow,
                    toPage: setToPage
                }}>
                    {children}
                </TransitionContext>
            </TitleContext>
        </>
    );
};

export default PixelTransition;