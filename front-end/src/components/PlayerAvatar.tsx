import type { PlayerString } from "../../public/static/chessConfig";
import OptionImage from "./OptionImage";

const PlayerField = ({name}: {name: PlayerString}) => {
    return (
        <div className="flex">
            <OptionImage
                name={name}
            />
            <h1>{name}</h1>
        </div>
    );
};

export default PlayerField;