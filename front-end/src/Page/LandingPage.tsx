import { useContext, useEffect, useRef } from "react";
import FloatingText from "../Component/FloatingText";
import Hero from "../Component/Hero";
import { Piece } from "../Entity/Piece";
import { BISHOP, KNIGHT, PAWN, QUEEN, ROOK } from "../static/pieceName";
import gsap from "gsap";
import { TransitionContext } from "../context/TransitionContext";

const LandingPage = () => {
    const tl = useRef<gsap.core.Timeline | null>(null);
    const transition = useContext(TransitionContext);
    const blackKnight = new Piece(KNIGHT, 0, 300, true);
    const blackPawn = new Piece(PAWN, 500, 0, true);
    const blackBishop = new Piece(BISHOP, 1000, 300, true);
    const blackRook = new Piece(ROOK, 1500, 100, true);
    const blackQueen = new Piece(QUEEN, 2200, 300, true);

    const pieceArray = [blackKnight, 
                        blackPawn, 
                        blackBishop, 
                        blackRook, 
                        blackQueen
                    ];

    useEffect(() => {
        tl.current = gsap.timeline();

        tl.current.from([blackKnight.container, 
                        blackPawn.container,
                        blackBishop.container,
                        blackRook.container,
                        blackQueen.container
                    ], {
            y: 1000,
            delay: 2,
            stagger: 0.2
        });


        return () => {
            if (tl.current) {
                tl.current.kill();
                tl.current = null;
            }
        }
    }, []);
    return (
        <div className="w-screen 
                        min-h-screen 
                        bg-gray-50 
                        overflow-hidden 
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-[5em]
                        ">
            <FloatingText message="Chess Engine"/>
            <Hero pieceList={pieceArray}/>
        </div>
    );
};

export default LandingPage;