import options, { type Player } from "../../public/static/options";
import Description from "./Description";


type OptionDescriptionProp = {
    hover: Player | null
};

const OptionDescription = ({hover}: OptionDescriptionProp) => {
    return (
        <div className="md:grid -translate-y-[2em] hidden" 
            style={
                {
                    gridTemplateColumns: "repeat(3, clamp(25px, 4vw, 60px))",
                    gridTemplateRows: "repeat(5, clamp(25px, 4vw,60px))"
                }
            }
        >
            {options.map(option => (
                <Description 
                    name={option.name}
                    desc={option.desc}
                    hover={hover}
                />
            ))}
        </div>
    );
};


export default OptionDescription;