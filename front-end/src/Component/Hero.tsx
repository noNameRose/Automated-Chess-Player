import type { Piece } from "../Entity/Piece";
import PieceIcon from "./PieceIcon";

const Hero = ({pieceList} : {pieceList: Piece[]}) => {
    return (
        <div className="relative z-10 w-[80vw] h-[50vh]">
            <svg viewBox="0 0 1000 1000" 
                className="w-full h-full border-2"
                preserveAspectRatio="xMinYMin meet"
            >
                {pieceList.map((piece: Piece) => {
                    return <PieceIcon piece={piece}/>
                })}
            </svg>
        </div>
    );
};

export default Hero;
