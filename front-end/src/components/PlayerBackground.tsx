import gsap from "gsap";
import { useEffect } from "react";
import { playerTheme, type Player } from "../../public/static/options";

type PlayerBackGroundProp = {
    chosenPlayer: Player | null,
    isFirstPlayer: boolean
}

const PlayerBackGround = ({chosenPlayer, isFirstPlayer} : PlayerBackGroundProp) => {

    useEffect(() => {
        if (chosenPlayer) {
            gsap.to(document.querySelectorAll(`#bg-box-${isFirstPlayer ? 1 : 2}`), {
                transform: "scale(1)",
                stagger: {
                    grid: "auto",
                    from: "edges",
                    amount: 0.7
                }
            });
        }

        if (chosenPlayer) {
            gsap.to(document.querySelectorAll(`#bg-box-${isFirstPlayer ? 1 : 2}`), {
                backgroundColor: playerTheme[chosenPlayer],
                stagger: {
                    grid: "auto",
                    from: "edges",
                    amount: 0.7
                }
            });
        }
        
    }, [chosenPlayer]);
    return (
        <div 
            className="w-[50vw] min-h-screen grid fixed top-0 -z-20"
            style={
                {
                    gridTemplateColumns: "repeat(auto-fit, clamp(25px, 5vw, 400px))",
                    gridTemplateRows: "repeat(auto-fit, clamp(25px, 5vw, 400px))",
                    left: isFirstPlayer ? 0 : "50vw"
                }
            }
        >
            {(new Array(13*20)).fill(null).map(() => (
                <div 
                    id={`bg-box-${isFirstPlayer ? 1 : 2}`}
                    style={
                        {
                            transform: "scale(0)"
                        }
                    }
                ></div>
            ))}
        </div>
    );
};

export default PlayerBackGround;