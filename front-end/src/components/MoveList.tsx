import { type PlayerString } from "../../public/static/chessConfig";
import MoveNotation from "./MoveNotations";

const MoveList = ({moves, playerName, isBlack}: {moves: string[], playerName: PlayerString, isBlack: boolean}) => {
    return (
        <div className="flex flex-col items-center grow w-1/2 overflow-hidden"
        >
            {moves.map(move => (
                <MoveNotation
                    isBlack={isBlack}
                    playerName={playerName}
                    notation={move}
                />
            ))}
        </div>
    );
};

export default MoveList;