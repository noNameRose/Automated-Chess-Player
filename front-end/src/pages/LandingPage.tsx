import { useState } from "react";
import AgentOptions from "../components/AgentOptions";
import Button from "../components/Button";
import OptionDescription from "../components/OptionDescriptions";
import Title from "../components/Title";

type Agent = "Claude" | "ChatGPT" | "Human" | "Random";

const LandingPage = () => { 
    const [hover1, setHover1] = useState<Agent | null>(null);
    const [hover2, setHover2] = useState<Agent | null>(null);

    const handleHover1 = (name: Agent) => {
        setHover1(name);
    };

    const handleHover2 = (name: Agent) => {
        setHover2(name);
    };
    
    return (
        <>
            <div className="max-w-260 min-h-screen mx-auto flex flex-col items-center justify-evenly overflow-hidden">
                <Title/>
                <div className="w-full flex">
                    <OptionDescription/>
                    <div className="w-full flex flex-col items-center gap-7">
                        <div className="flex flex-col sm:flex-row items-center w-full justify-evenly gap-4">
                            <AgentOptions
                                names={["Claude", "ChatGPT", "Random", "Human"]}
                            />
                            <p className="font-black text-3xl">VS</p>
                            <AgentOptions
                                names={["Claude", "ChatGPT", "Random", "Human"]}
                            />
                        </div>
                        <div className="self-center">
                            <Button>
                                Start
                            </Button>
                        </div>
                    </div>
                     <OptionDescription/>
                </div>
            </div>
        </>
    );
};

export default LandingPage;