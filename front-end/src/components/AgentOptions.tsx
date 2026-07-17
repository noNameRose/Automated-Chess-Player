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
                    order={id === 1 ? "first" : "second"}
                    name={name}
                    key={name}
                    button={
                        {
                            onMouseOver: () => {
                                if (id === 1 && context) {
                                    context.hoverHandler1(name);
                                }
                                if (id === 2 && context) {
                                    context.hoverHandler2(name);
                                }
                            },

                            onMouseOut: () => {
                                if (id === 1 && context) {
                                    context.mouseOutHandler1()
                                }
                                if (id === 2 && context) {
                                    context.mouseOutHandler2();
                                }
                            },

                            onClick: () => {
                                if (id === 1 && context) {
                                    context.clickHandler1(name);
                                }
                                if (id === 2 && context) {
                                    context.clickHandler2(name);
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