
const NUM_SHADOW: number = 15;
const DX: number = 0.015;
const DY: number = 0.015;

const FloatingText = ({message}: {message: string}) => {
    const texts: string[] = new Array(NUM_SHADOW).fill(message);
    return (
        <div className="font-bold -translate-y-[5vh]">
            <h1
                className="relative z-100 whitespace-nowrap"
                style={
                    {
                        fontSize: "clamp(2.5rem, 7vw, 10rem)",
                    }
                }
            >
                <span className="text-green-200 relative z-90">{message}</span>
                {texts.map((text: string, index: number) => (
                    <span
                        className={"absolute text-blue-500"}
                        style={ 
                            {
                                top: (index * DY) + "em",
                                left: (index * DX) + "em",
                                zIndex: - index
                            }
                        }
                    >
                        {text}
                    </span>))
                }
            </h1>
        </div>
    );
};

export default FloatingText;