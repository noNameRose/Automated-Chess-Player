import options, { type Player } from "../../public/static/options";
import Description from "./Description";


type OptionDescriptionProp = {
    hover: Player | null,
    order: "first" | "second"
};

const OptionDescription = ({hover, order}: OptionDescriptionProp) => {
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
                    order={order}
                    name={option.name}
                    desc={option.desc}
                    hover={hover}
                />
            ))}
        </div>
    );
};


export default OptionDescription;