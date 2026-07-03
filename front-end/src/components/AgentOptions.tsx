import Button from "./Button";

type Options = {
    names: string[],  
};

const AgentOptions = ({names}: Options) => {
    return (
        <div>
            {names.map((name: string) => (
                <Button>
                    <div className="font-black text-xl text-center border-2 px-[2em] py-[.5em]">
                        {name}
                    </div>
                </Button>
            ))}
        </div>
    );
};

export default AgentOptions;