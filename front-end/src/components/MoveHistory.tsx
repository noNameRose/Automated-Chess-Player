import { useContext } from "react";
import PlayerMovesContexts from "../contexts/PlayerMovesContext";
import MoveList from "./MoveList";

const MoveHistory = () => {
    const history = useContext(PlayerMovesContexts);
    const firstPlayerMoves = history?.firstPlayerMoves;
    const secondPlayerMoves = history?.secondPlayerMoves;
    return (
        <div className="bg-amber-50 h-90 overflow-y-scroll">
            <div className="flex font-bold justify-around">
                <MoveList moves={firstPlayerMoves as string[]}/>
                <MoveList moves={secondPlayerMoves as string[]}/>
            </div>
        </div>
    );
};

export default MoveHistory;