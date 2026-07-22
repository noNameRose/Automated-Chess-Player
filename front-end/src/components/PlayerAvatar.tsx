import { WhiteCellFill, type PlayerString } from "../../public/static/chessConfig";
import ThinkingLoading from "./loading/ThinkingLoading";
import OptionImage from "./OptionImage";

const PlayerField = ({name}: {name: PlayerString}) => {
    return (
        <div 
            className="flex items-center w-full p-[1em] rounded-[.5em]"
            style={
                {
                    backgroundColor: WhiteCellFill[name]
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
            <div className="text-xl">
                <h1 className="font-black">{name}</h1>
                <ThinkingLoading/>
            </div>
        </div>
    );
};

export default PlayerField;