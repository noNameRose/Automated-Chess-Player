import OptionImage from "./OptionImage";
import {type Player} from "../../public/static/options";
import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ChosenPlayerContext from "../contexts/ChosenPlayerContext";

type DescriptionProp = {
    name: Player,
    desc: string;
    hover: Player | null,
    order: "first" | "second"
};

const Description = ({name, desc, hover, order} : DescriptionProp) => {
    const image = useRef<HTMLDivElement | null>(null);
    const text = useRef<HTMLDivElement | null>(null);
    const chosenPlayer = useContext(ChosenPlayerContext);
    const isChosen = chosenPlayer && chosenPlayer.firstChosenPlayer === name && order === "first";

    useEffect(() => {
        if (isChosen) {
            return;
        }
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
                        opacity: isChosen ? 1 : 0
                    }
                }
            >
                <OptionImage name={name}/>
            </div>
            <div 
                ref={text}
                className="text-xl col-[1/4] row-[4/6] text-center font-bold"
                style={
                    {
                        opacity: isChosen ? 1 : 0
                    }
                }
            >
                {desc}
            </div>
        </>
    );
};

export default Description