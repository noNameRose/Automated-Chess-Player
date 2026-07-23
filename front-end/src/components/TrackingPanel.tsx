import type { PlayerString } from "../../public/static/chessConfig";
import MoveHistory from "./MoveHistory";
import PlayerField from "./PlayerAvatar";

type TrackingPanelProp = {
    firstPlayer: PlayerString,
    secondPlayer: PlayerString
}

const TrackingPanel = ({firstPlayer, secondPlayer}: TrackingPanelProp) => {

    return (
        <div className="w-full sm:w-[30%] self-stretch justify-center flex flex-col">
            <PlayerField
                name={firstPlayer}
                firstPlayer={true}
            />
            <MoveHistory/>
            <PlayerField
                name={secondPlayer}
                firstPlayer={false}
            />
        </div>
    );
};

export default  TrackingPanel;