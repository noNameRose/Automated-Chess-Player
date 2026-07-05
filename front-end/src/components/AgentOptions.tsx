import { useContext } from "react";
import Button from "./Button";

import type { Player } from "../../public/static/options";
import MouseEventContext from "../contexts/MouseEventContext";


type OptionsProp = {
    names: Player[],  
    id: number  
};


const AgentOptions = ({names, id}: OptionsProp) => {
    const context = useContext(MouseEventContext);

    
    return (
        <div>
            {names.map((name: Player) => (
                <Button 
                    key={name}
                    button={
                        {
                            onMouseOver: (e) => {
                                if (id === 1 && context) {
                                    context.hoverHandler1(name);
                                }
                                if (id === 2 && context) {
                                    context.hoverHandler2(name);
                                }
                            }
                        }
                    }
                >
                    {name}
                </Button>
            ))}
        </div>
    );
};

export default AgentOptions;