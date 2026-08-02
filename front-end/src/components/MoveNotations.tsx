import { useEffect, useRef } from "react";
import { BlackCellFill, WhiteCellFill, type PlayerString } from "../../public/static/chessConfig";
import gsap from "gsap";

const MoveNotation = ({isBlack, playerName, notation}: {isBlack: boolean, playerName: PlayerString, notation: string}) => {
    const notationRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.to(notationRef.current, {
            transform: "translate(0,0)"
        });
    }, []);
    return (
        <div
            ref={notationRef}
            className="w-full text-center py-2 -translate-x-full"
            style={
                {
                    backgroundColor: isBlack ?  BlackCellFill[playerName] : WhiteCellFill[playerName],
                    color: isBlack ? WhiteCellFill[playerName] : BlackCellFill[playerName]
                }
            }
        >{notation}</div>
    );
};

export default MoveNotation;