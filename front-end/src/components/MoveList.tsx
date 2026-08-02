import { BlackCellFill, WhiteCellFill, type PlayerString } from "../../public/static/chessConfig";

const MoveList = ({moves, playerName, isBlack}: {moves: string[], playerName: PlayerString, isBlack: boolean}) => {
    return (
        <div className="flex flex-col gap-4 items-center grow"
            style={
                {
                    backgroundColor: isBlack ?  BlackCellFill[playerName] : WhiteCellFill[playerName],
                }
            }
        >
            {moves.map(move => (
                        <div>{move}</div>
            ))}
        </div>
    );
};

export default MoveList;