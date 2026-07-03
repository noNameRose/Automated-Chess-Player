import AgentOptions from "../components/AgentOptions";
import Button from "../components/Button";
import Title from "../components/Title";

const LandingPage = () => { 
    return (
        <>
            <div className="max-w-225 min-h-screen mx-auto flex flex-col items-center justify-evenly overflow-hidden">
                <Title/>
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
            </div>
        </>
    );
};

export default LandingPage;