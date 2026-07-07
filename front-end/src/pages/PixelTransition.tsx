import gsap from "gsap";
import { useEffect, useState, type ReactNode } from "react";

const PixelTransition = ({children}: {children: ReactNode}) => {
    const [isShow, setShow] = useState<Boolean>(true);

    useEffect(() => {
        if (isShow) {
            gsap.to(document.querySelectorAll("#pixel"), {
                scale: 1
            });
        }
        else {
            gsap.to(document.querySelectorAll("#pixel"), {
                scale: 0
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
                        className="bg-black scale-0"
                    >
                    </div>
                ))}
            </div>
            
        </>
    );
};

export default PixelTransition;