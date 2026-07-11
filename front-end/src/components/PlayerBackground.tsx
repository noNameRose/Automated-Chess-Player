import gsap from "gsap";
import { useEffect } from "react";
import { playerTheme, type Player } from "../../public/static/options";

type PlayerBackGroundProp = {
    chosenPlayer: Player | null,
    isFirstPlayer: boolean
}

const PlayerBackGround = ({chosenPlayer, isFirstPlayer} : PlayerBackGroundProp) => {
    let clss = "w-screen min-h-[50vh] md:w-[50vw] md:min-h-screen grid fixed -z-20 ";
    if (isFirstPlayer) {
        clss += "top-0 left-0";
    }
    else {
        clss += "top-[50vh] left-0 md:top-0 md:left-[50vw]";
    }

    useEffect(() => {
        if (chosenPlayer) {
            gsap.to(document.querySelectorAll(`#bg-box-${isFirstPlayer ? 1 : 2}`), {
                transform: "scale(1)",
                stagger: {
                    grid: "auto",
                    from: "edges",
                    amount: 1
                }
            });
        }

        if (chosenPlayer) {
            gsap.to(document.querySelectorAll(`#bg-box-${isFirstPlayer ? 1 : 2}`), {
                backgroundColor: playerTheme[chosenPlayer],
                stagger: {
                    grid: "auto",
                    from: "edges",
                    amount: 1
                }
            });
        }
        
    }, [chosenPlayer]);

    return (
        <div 
            className={clss}
            style={
                {
                    gridTemplateColumns: "repeat(auto-fit, clamp(25px, 5vw, 400px))",
                    gridTemplateRows: "repeat(auto-fit, clamp(25px, 5vw, 400px))",
                }
            }
        >
            {(new Array(20*20)).fill(null).map(() => (
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