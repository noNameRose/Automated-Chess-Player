import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type PixelConfig = {
    row: number,
    col: number,
    width: string,
    height: string,
    
}

const LEFT = 4;
const RIGHT = 13;
const TOP = 1;
const BOTTOM = 5;


const Pixel = ({row, col, width, height}: PixelConfig) => {
    
    const [isHover, setIsHover] = useState<boolean | null>(null);
    const tl1 = useRef<gsap.core.Timeline | null>(null);
    const tl2 = useRef<gsap.core.Timeline | null>(null);
    const dom = useRef<HTMLDivElement>(null);
    const isBorder = row === LEFT || row === RIGHT || col == TOP || col == BOTTOM; 
    const isInBound = row > LEFT && row < RIGHT && col > TOP && col < BOTTOM;
    


    useEffect(() => {
        tl1.current = gsap.timeline({defaults: {
            duration: 1
        }});
        
        if (isHover) {
            if (isHover !== null) {
                tl1.current.to(dom.current, {
                    backgroundColor: "#4C8CE4"
                });
            }
        }
        else {
            if (isHover !== null) {
                tl1.current.to(dom.current, {
                    background: "#FBF6F6",
                    duration: 5
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
                duration: Math.random() * 3 + 1
            }
        });


        if (isBorder) {
            tl2.current.to(dom.current, {
                background: "#FBF6F6",
            });
        }

        return () => {
            if (tl2.current) {
                tl2.current.revert();
                tl2.current = null;
            }
        }

        
    }, []);


    
    return (
        <div
            ref={dom}
            className={"absolute rounded-[.5em] " + ((row >= LEFT && row <= RIGHT && col >= TOP && col <= BOTTOM) ? "bg-blue-200" : "bg-gray-50")}
            onMouseOver={ isInBound ?  () => {} : () =>  setIsHover(true)}
            onMouseOut={ isInBound ? () => {} : () => setIsHover(false)}
            style={
                {
                    width: `calc(${width})`,
                    height: `calc(${height})`,
                    left: `calc(${row} * ${width})`,
                    top: `calc(${col} * ${height})`
                }
            }
        ></div>
    );
};

export default Pixel;