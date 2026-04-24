import { useContext, useEffect, useRef, useState } from "react";
import type { PixelController } from "../Entity/PixelController";
import type { PixelEntity } from "../Entity/PixelEntity";
import Pixel from "./Pixel";
import gsap from "gsap";
import { TransitionContext } from "../context/TransitionContext";


const PixelAnimator = ({pixelController} : {pixelController: PixelController}) => {
    const tl = useRef<gsap.core.Timeline>(null);
    const transition = useContext(TransitionContext);

    useEffect(() => {
        if (transition?.isTransition) {
            tl.current = gsap.timeline();   
            tl.current.to(pixelController.pixels.filter(pixel => !pixel.notChangeColor).map(pixel => pixel.dom), {
                background: "#FBF6F6",
                delay: 1,
                stagger: {
                    grid: [pixelController.NUM_ROW_PIXEL, pixelController.NUM_COL_PIXEL],
                    from: "edges",
                    amount: 1.5

                },
                onComplete: () => transition.setIsTransition(false)
            });
        }

        return () => {
            if (tl.current) {
                tl.current.kill();
                tl.current = null;
            }
        }
    }, [transition]);

    
    
    return (
        <div>
            {pixelController.pixels.map((pixel: PixelEntity) => (
                    <Pixel
                        pixel={pixel}
                        width={`100vw/${pixelController.NUM_COL_PIXEL}`}
                        height={`100vh/${pixelController.NUM_ROW_PIXEL}`}
                    />
            ))}
        </div>
    );
}



export default  PixelAnimator;