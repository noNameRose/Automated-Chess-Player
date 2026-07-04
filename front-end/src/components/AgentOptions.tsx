import Button from "./Button";

type OptionsProp = {
    names: string[],  
    
};

const AgentOptions = ({names}: OptionsProp) => {
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