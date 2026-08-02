import { BlackCellFill, WhiteCellFill, type PlayerString } from "../../public/static/chessConfig";

const MoveList = ({moves, playerName, isBlack}: {moves: string[], playerName: PlayerString, isBlack: boolean}) => {
    return (
        <div className="flex flex-col items-center grow w-1/2"
        >
            {moves.map(move => (
                        <div
                            className="w-full text-center py-2"
                            style={
                                {
                                    backgroundColor: isBlack ?  BlackCellFill[playerName] : WhiteCellFill[playerName],
                                    color: isBlack ? WhiteCellFill[playerName] : BlackCellFill[playerName]
                                }
                            }
                        >{move}</div>
            ))}
        </div>
    );
};

export default MoveList;