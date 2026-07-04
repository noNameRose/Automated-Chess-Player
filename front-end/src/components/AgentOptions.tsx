import Button from "./Button";

type Options = {
    names: string[],  
};

const AgentOptions = ({names}: Options) => {
    return (
        <div>
            {names.map((name: string) => (
                <Button key={name}>
                    {name}
                </Button>
            ))}
        </div>
    );
};

export default AgentOptions;