import options from "../../public/static/options";
import Description from "./Description";

type Agent = "Human" | "ChatGPT" | "Random" | "Claude";

type OptionDescriptionProp = {
    hover: Agent | null
};

const OptionDescription = ({hover}: OptionDescriptionProp) => {
    return (
        <div className="grid -translate-y-[2em]" 
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