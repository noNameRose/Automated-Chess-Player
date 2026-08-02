import { useContext } from "react";
import PlayerMovesContexts from "../contexts/PlayerMovesContext";
import MoveList from "./MoveList";
import type { PlayerString } from "../../public/static/chessConfig";

const MoveHistory = ({firstPlayer, secondPlayer}: {firstPlayer: PlayerString, secondPlayer: PlayerString}) => {
    const history = useContext(PlayerMovesContexts);
    const firstPlayerMoves = history?.firstPlayerMoves;
    const secondPlayerMoves = history?.secondPlayerMoves;
    return (
        <div className="bg-amber-50 h-90 overflow-y-scroll">
            <div className="flex font-bold justify-around">
                <MoveList moves={secondPlayerMoves as string[]} playerName={secondPlayer} isBlack={false}/>
                <MoveList moves={firstPlayerMoves as string[]} playerName={firstPlayer} isBlack/>
            </div>
        </div>
    );
};

export default MoveHistory;