import OptionImage from "./OptionImage";

type DescriptionProp = {
    name: "Claude" | "ChatGPT" | "Random" | "Human",
    desc: string;
};

const Description = ({name, desc} : DescriptionProp) => {
    return (
        <>
            <div className="col-[1/4] row-[1/5]">
                <OptionImage name={name}/>
            </div>
            <div className="text-xl col-[1/4] row-[4/6] text-center">
                {desc}
            </div>
        </>
    );
};

export default Description