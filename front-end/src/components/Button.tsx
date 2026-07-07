import gsap from "gsap";
import { useContext, useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { playerTheme, type Player } from "../../public/static/options";
import ChosenPlayerContext from "../contexts/ChosenPlayerContext";

interface ButtonProp  {
    children: ReactNode,
    button?: ComponentProps<'div'>,
    name?: Player,
    order?: "first" | "second"
};

const Button = ({children, name, order, ...props}: ButtonProp) => {
    const [isHover, setIsHover] = useState<Boolean>(false);
    const button = useRef<HTMLDivElement | null>(null);
    const background = useRef<HTMLDivElement | null>(null);
    const chosenPlayer = useContext(ChosenPlayerContext);

    const handMouseDown = () => {
        gsap.to(button.current, {
            x: "0",
            y: "0",
            ease: "power4.out",
            duration: "0.2"
        });
        gsap.to(background.current, {
            right: 0,
            ease: "power4.out",
        })
    };

    const handleMouseUp = () => {
        gsap.to(button.current, {
            x: "-0.5em",
            y: "-0.5em",
            ease: "power4.out",
            duration: "0.2"
        });
    }

    useEffect(() => {
        if (button.current) {
            if (isHover) {
                gsap.to(button.current, {
                    x: "-0.5em",
                    y: "-0.5em",
                    ease: "power4.out"
                });
            }
            else {
                 gsap.to(button.current, {
                    x: "0",
                    y: "0",
                    ease: "power4.out"
                });
            }
        }
    }, [isHover]);

    useEffect(() => {
        if (!background.current || !order) {
            return;
        }
        if (!chosenPlayer) {
            return;
        }
        if (order === "first" && chosenPlayer.firstChosenPlayer !== name) {
            gsap.to(background.current, {
                right: "100%"
            });
        }
        if (order === "second" && chosenPlayer.secondChosenPlayer !== name) {
            gsap.to(background.current, {
                right: "100%"
            });
        }


    }, [chosenPlayer])

    return (
        <div className="relative">
            <div className="w-full h-full bg-black absolute top-0 left-0"></div>
            <div 
                ref={button}
                onMouseDown={handMouseDown}
                onMouseUp={handleMouseUp}
                onClick={(e) => {
                    if (props.button && props.button.onClick) {
                        props.button.onClick(e);
                    }
                }}
                onMouseOver={(e) => {
                    setIsHover(true);
                    if (props.button && props.button.onMouseOver) {
                        props.button.onMouseOver(e);
                    }
                }}
                onMouseOut={(e) => {
                    setIsHover(false);
                    if (props.button && props.button.onMouseOut) {
                        props.button.onMouseOut(e);
                    }
                }}
                className="font-black text-center border-2 px-[2em] py-[.5em] relative z-10 bg-primary cursor-pointer overflow-hidden"
                style={
                    {
                        fontSize: "clamp(18px, 1.3vw, 25px)"
                    }
                }
                {...props}
            >
                {children}
                <div
                    ref={background}
                    className="w-full h-full absolute top-0 right-full -z-10"
                    style={
                        {
                            backgroundColor: name ? playerTheme[name] : "black"
                        }
                    }
                ></div>
            </div>
        </div>
    );
};

export default Button;