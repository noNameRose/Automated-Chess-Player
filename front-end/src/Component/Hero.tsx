import type { Piece } from "../Entity/Piece";
import PieceIcon from "./PieceIcon";

const Hero = ({pieceList} : {pieceList: Piece[]}) => {
    return (
        <div className="relative z-10 w-[80vw] h-[40vh]">
            <svg viewBox="-500 0 1000 1000" 
                className="w-full h-full"
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
