
const NUM_SHADOW: number = 15;
const DX: number = 0.015;
const DY: number = 0.015;

const FloatingText = ({message}: {message: string}) => {
    const texts: string[] = new Array(NUM_SHADOW).fill(message);
    return (
        <div className="relative font-bold mx-auto w-fit">
            {texts.map((text: string, index: number) => (
                <h1 
                    className={"absolute whitespace-nowrap -translate-x-1/2 translate-y-full " + (index === NUM_SHADOW - 1 ? "text-green-200" : "text-blue-500")}
                    style={
                        {
                            fontSize: "clamp(2.5rem, 5vw, 10rem)",
                            top: - (index * DY) + "em",
                            left: - (index * DX) + "em"
                        }
                    }
                >
                    {text}
                </h1>))}
        </div>
    );
};

export default FloatingText;