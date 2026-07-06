import gsap from "gsap";
import { useEffect } from "react";
import { playerTheme, type Player } from "../../public/static/options";

type PlayerBackGroundProp = {
    chosenPlayer: Player | null,
}

const PlayerBackGround = ({chosenPlayer} : PlayerBackGroundProp) => {

    useEffect(() => {
        if (chosenPlayer) {
            gsap.to(document.querySelectorAll("#bg-box"), {
                transform: "scale(1)",
                stagger: {
                    grid: "auto",
                    from: "start",
                    amount: 0.7
                }
            });
        }

        if (chosenPlayer) {
            gsap.to(document.querySelectorAll("#bg-box"), {
                backgroundColor: playerTheme[chosenPlayer],
                stagger: {
                    grid: "auto",
                    from: "start",
                    amount: 1
                }
            });
        }
        
    }, [chosenPlayer]);
    return (
        <div 
            className="w-[50vw] min-h-screen grid fixed top-0 left-0 -z-20"
            style={
                {
                    gridTemplateColumns: "repeat(auto-fit, clamp(25px, 5vw, 400px))",
                    gridTemplateRows: "repeat(auto-fit, clamp(25px, 5vw, 400px))",
                }
            }
        >
            {(new Array(13*20)).fill(null).map(() => (
                <div 
                    id="bg-box"
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