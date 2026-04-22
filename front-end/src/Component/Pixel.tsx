import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import type { PixelEntity } from "../Entity/PixelEntity";
import { TransitionContext } from "../context/TransitionContext";

type PixelConfig = {
    pixel: PixelEntity,
    width: string,
    height: string,
    
}


const Pixel = ({pixel, width, height}: PixelConfig) => {
    const row = pixel.row;
    const col = pixel.col;
    const [isHover, setIsHover] = useState<boolean | null>(null);
    const tl1 = useRef<gsap.core.Timeline | null>(null);
    const tl2 = useRef<gsap.core.Timeline | null>(null);
    const dom = useRef<HTMLDivElement>(null);
    const transition = useContext(TransitionContext);
    
    useEffect(() => {
        pixel.dom = dom.current;
        return () => {
            pixel.dom = null;
        }
    }, [pixel]);

    useEffect(() => {
        tl1.current = gsap.timeline();
        
        if (isHover) {
            if (isHover !== null) {
                tl1.current.to(dom.current, {
                    backgroundColor: "#4C8CE4",
                    transformOrigin: "center center"
                });
            }
        }
        else {
            if (isHover !== null) {
                tl1.current.to(dom.current, {
                    background: "#FBF6F6",
                    duration: 5,
                    scale: 1.1
                });
            }
        }
        return () => {
            if (tl1.current) {
                tl1.current.kill();
                tl1.current = null;
            }
        }
        
    }, [isHover]);

    useEffect(() => {
        
        tl2.current = gsap.timeline({
            defaults: {
                repeat: -1,
                yoyo: true,
                duration: Math.random() * 2 + 1
            }
        });

        
        if (pixel.isGlitter && !transition?.isTransition) {
            tl2.current.to(dom.current, {
                background: "#4C8CE4",
            });
        }

        return () => {
            if (tl2.current) {
                tl2.current.kill();
                tl2.current = null;
            }
        }

        
    }, [transition]);


    
    return (
        <div
            ref={dom}
            className={"absolute bg-blue-200" }
            onMouseOver={ pixel.notChangeColor ?  () => {} : () =>  setIsHover(true)}
            onMouseOut={ pixel.notChangeColor ? () => {} : () => setIsHover(false)}
            style={
                {
                    width: `calc(${width})`,
                    height: `calc(${height})`,
                    left: `calc(${col} * ${width})`,
                    top: `calc(${row} * ${height})`
                }
            }
        ></div>
    );
};

export default Pixel;

// + ((row >= LEFT && row <= RIGHT && col >= TOP && col <= BOTTOM) ? "bg-blue-200" : "bg-gray-50")