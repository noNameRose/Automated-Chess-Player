import { useContext } from "react";
import PlayerMovesContexts from "../contexts/PlayerMovesContext";

const MoveHistory = () => {
    const history = useContext(PlayerMovesContexts);
    const firstPlayerMoves = history?.firstPlayerMoves;
    const secondPlayerMoves = history?.secondPlayerMoves;
    return (
        <div className="bg-amber-50 h-90 overflow-y-scroll">
            <div className="flex gap-40 font-bold">
                <div className="flex flex-col">
                    {firstPlayerMoves?.map(move => (
                        <div>{move}</div>
                    ))}
                </div>
                <div>
                    {secondPlayerMoves?.map(move => (
                        <div>{move}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoveHistory;