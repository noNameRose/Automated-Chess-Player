import { BlackCellFill, WhiteCellFill, type PlayerString } from "../../public/static/chessConfig";

const MoveNotation = ({isBlack, playerName, notation}: {isBlack: boolean, playerName: PlayerString, notation: string}) => {
    return (
        <div
            className="w-full text-center py-2"
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