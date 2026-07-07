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
    const isChosen = (chosenPlayer && chosenPlayer.firstChosenPlayer === name && order === "first") ||
                    (chosenPlayer && chosenPlayer.secondChosenPlayer === name && order === "second");
    
    const firstPlayerChosen = chosenPlayer && chosenPlayer.firstChosenPlayer && order === "first";
    const secondPlayerChosen = chosenPlayer && chosenPlayer.secondChosenPlayer && order === "second";

    useEffect(() => {
        if (isChosen)
            return;
        if (firstPlayerChosen || secondPlayerChosen)
            return;
        const isShow = name === hover;
        if (isShow ) {
            gsap.to([image.current, text.current], {
                opacity: 1,
            });
        }
        else {
            gsap.to([image.current, text.current], {
                opacity: 0
            });
        }
    }, [hover]);

    useEffect(() => {
        if (isChosen) {
            gsap.to([image.current, text.current], {
                opacity: 1,
            });
        }
        else {
             gsap.to([image.current, text.current], {
                opacity: 0,
            });
        }
    }, [isChosen]);
    
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
                className="text-xl col-[1/4] row-[4/6] text-center font-bold"
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