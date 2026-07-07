import gsap from "gsap";
import { useEffect, useState, type ReactNode } from "react";

const PixelTransition = ({children}: {children: ReactNode}) => {
    const [isShow, setShow] = useState<Boolean>(false);

    useEffect(() => {
        if (isShow) {
            gsap.to(document.querySelectorAll("#pixel"), {
                transform: "scale(1)",
                stagger: {
                    grid: "auto",
                    amount: 0.7,
                    from: "center"
                }
            });
        }
        else {
            gsap.to(document.querySelectorAll("#pixel"), {
                transform: "scale(0)",
                stagger: {
                    grid: "auto",
                    amount: 0.7,
                    from: "center",
                }
            });
        }
    }, [isShow]);
    return (
        <>
            <div 
                className="w-screen min-h-screen fixed z-100 grid"
                style={
                    {
                        gridTemplateColumns: "repeat(auto-fit, clamp(25px, 4vw, 60px))",
                        gridTemplateRows: "repeat(auto-fit, clamp(25px, 4vw, 60px))",
                    }
                }
            >
                {(new Array(500)).fill(null).map(_ => (
                    <div 
                        id="pixel"
                        className="bg-black"
                        style={{
                            transform: "scale(1)"
                        }}
                    >
                    </div>
                ))}
            </div>
            {children}
        </>
    );
};

export default PixelTransition;