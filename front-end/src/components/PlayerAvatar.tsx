import { BlackCellFill, WhiteCellFill, type PlayerString } from "../../public/static/chessConfig";
import ThinkingLoading from "./loading/ThinkingLoading";
import OptionImage from "./OptionImage";

type BorderStyle = {
    borderTopLeftRadius?: string,
    borderTopRightRadius?: string,
    borderBottomRightRadius?: string,
    borderBottomLeftRadius?: string
}

const PlayerField = ({name, firstPlayer}: {name: PlayerString, firstPlayer: boolean}) => {
    const ROUNDED = "0.5em";
    let style: BorderStyle= {
            borderTopLeftRadius: ROUNDED,
            borderTopRightRadius: ROUNDED
    };
    if (!firstPlayer) {
        style = {
            borderBottomLeftRadius: ROUNDED,
            borderBottomRightRadius: ROUNDED
        }
    }
    return (
        <div 
            className="flex items-center w-full p-[1em]"
            style={
                {
                    backgroundColor: firstPlayer ? BlackCellFill[name] :  WhiteCellFill[name],
                    ...style
                }
            }
        >
            <div
                style={
                    {
                        width: "clamp(100px, 10vw, 146px)"
                    }
                }
            >
                <OptionImage
                    name={name}
                />
            </div>
            <div className="text-xl flex flex-col gap-4 font-black">
                <h1
                    style={
                        {
                            color: firstPlayer ? WhiteCellFill[name] : BlackCellFill[name]
                        }
                    }
                >{name}</h1>
                <ThinkingLoading
                    firstPlayer={firstPlayer}
                    playerName={name}
                />
            </div>
        </div>
    );
};

export default PlayerField;