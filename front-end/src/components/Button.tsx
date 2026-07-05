import gsap from "gsap";
import { useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";

interface ButtonProp  {
    children: ReactNode,
    button?: ComponentProps<'div'>
};

const Button = ({children, ...props}: ButtonProp) => {
    const [isHover, setIsHover] = useState<Boolean>(false);
    const button = useRef<HTMLDivElement | null>(null);

    const handMouseDown = () => {
        gsap.to(button.current, {
            x: "0",
            y: "0",
            ease: "power4.out",
            duration: "0.2"
        });
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

    return (
        <div className="relative">
            <div className="w-full h-full bg-black absolute top-0 left-0"></div>
            <div 
                ref={button}
                onMouseDown={handMouseDown}
                onMouseUp={handleMouseUp}
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
                className="font-black text-center border-2 px-[2em] py-[.5em] relative z-10 bg-primary cursor-pointer"
                style={
                    {
                        fontSize: "clamp(18px, 1.3vw, 25px)"
                    }
                }
                {...props}
            >
                {children}
            </div>
        </div>
    );
};

export default Button;