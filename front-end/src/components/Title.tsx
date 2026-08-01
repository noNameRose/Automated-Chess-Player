import { useContext } from "react";
import TitleContext from "../contexts/TitleContext";
import Characters from "./Characters";

const Title = () => {
    const titleRef = useContext(TitleContext);
    return (
        <div    
            className="grid z-200"
            style={
                {
                    gridTemplateColumns: "repeat(15, clamp(25px, 4vw,60px))",
                    gridTemplateRows: "repeat(6, clamp(25px, 4vw,60px))",
                }
            }
        >
        
            {(new Array(10)).fill(null).map((_, index) => {
                let col = "";
                let row = "";
                if (index === 0) {
                    col = "3/14";
                    row = "2/3"
                }
                if (index === 1) {
                    col = "1/16";
                    row = "3/4"
                }
                if (index === 2) {
                    row = "4/5";
                    col = "3/14"
                }
                if (index === 3) {
                    row = "5/6";
                    col = "12/15"
                }
                if (index === 4) {
                    row = "5/7",
                    col = "4/5"
                }
                if (index === 5) {
                    row = "5/6";
                    col = "3/4"
                }
                if (index === 6) {
                    row = "1/2";
                    col = "5/6";
                }
                if (index === 7) {
                    row = "1/2";
                    col = "8/9"
                }
                if (index === 8) {
                    row = "1/2";
                    col = "10/11";
                }
                if (index === 9) {
                    row = "1/2";
                    col = "13/14";
                }
                return (
                    <div 
                        className="bg-black text-center relative z-10" 
                        style={{
                            gridColumn: col,
                            gridRow: row
                        }}>
                    </div>);
            })
            }
            <div className="col-[3/14] row-[2/5] z-30 flex items-center justify-center gap-4">
                <Characters
                    characters={["A", "I"]}
                />
                <Characters
                    characters={["C", "h", "e", "s", "s"]}
                />
            </div>
        </div>
    );

};

export default Title;