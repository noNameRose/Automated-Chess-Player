
const NUM_SHADOW: number = 20;
const DX: number = 0.015;
const DY: number = 0.015;

const FloatingText = ({message}: {message: string}) => {
    const texts: string[] = new Array(NUM_SHADOW).fill(message);
    return (
        <div className="absolute font-bold left-1/2 -translate-x-1/2">
            <h1
                className="text-green-200 relative z-100"
                style={
                    {
                        fontSize: "clamp(2.5rem, 7vw, 10rem)",
                    }
                }
            >
                {message}
            </h1>
            {texts.map((text: string, index: number) => (
                <h1 
                    className={"absolute whitespace-nowrap text-blue-500"}
                    style={ 
                        {
                            fontSize: "clamp(2.5rem, 7vw, 10rem)",
                            top: (index * DY) + "em",
                            left: (index * DX) + "em",
                            zIndex: - index
                        }
                    }
                >
                    {text}
                </h1>))}
        </div>
    );
};

export default FloatingText;