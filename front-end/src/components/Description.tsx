import OptionImage from "./OptionImage";

type Agent = "Claude" | "ChatGPT" | "Random" | "Human";

type DescriptionProp = {
    name: Agent,
    desc: string;
    hover: Agent | null
};

const Description = ({name, desc, hover} : DescriptionProp) => {
    return (
        <>
            <div className="col-[1/4] row-[1/5]"
                style={
                    {
                        opacity: name === hover ? 1 : 0,
                    }
                }
            >
                <OptionImage name={name}/>
            </div>
            <div 
                className="text-xl col-[1/4] row-[4/6] text-center"
                style={
                    {
                        opacity: name === hover ? 1 : 0
                    }
                }
            >
                {desc}
            </div>
        </>
    );
};

export default Description