import gsap from "gsap";
import { useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";

interface ButtonProp  {
    children: ReactNode,
    button?: ComponentProps<'button'>
};

const Button = ({children, ...props}: ButtonProp) => {
    const [isHover, setIsHover] = useState<Boolean>(false);
    const button = useRef<HTMLDivElement | null>(null);

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
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                className="font-black text-xl text-center border-2 px-[2em] py-[.5em] relative z-10 bg-primary cursor-pointer"
                {...props}
            >
                {children}
            </div>
        </div>
    );
};

export default Button;