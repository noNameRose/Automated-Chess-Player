import OptionImage from "./OptionImage";
import {type Player} from "../../public/static/options";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type DescriptionProp = {
    name: Player,
    desc: string;
    hover: Player | null
};

const Description = ({name, desc, hover} : DescriptionProp) => {
    const image = useRef<HTMLDivElement | null>(null);
    const text = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const isShow = name === hover;
        if (isShow) {
            gsap.to([image.current, text.current], {
                opacity: 1,
            });
        }
        else {
            gsap.to([image.current, text.current], {
                opacity: 0
            });
        }
    }, [hover])
    
    return (
        <>
            <div 
                ref={image}
                className="col-[1/4] row-[1/5]"
                style={
                    {
                        opacity: 0
                    }
                }
            >
                <OptionImage name={name}/>
            </div>
            <div 
                ref={text}
                className="text-xl col-[1/4] row-[4/6] text-center"
                style={
                    {
                        opacity: 0
                    }
                }
            >
                {desc}
            </div>
        </>
    );
};

export default Description