export type Player = "Claude" | "ChatGPT" | "Human" | "Random";

export type option = {
    name: Player,
    desc: string,
};

export const playerTheme = {
    "Claude": "#BD674C",
    "ChatGPT": "#4FBDA1",
    "Random": "#4B73BD",
    "Human": "#804BBD"
};

const options: option[] = [
    {
        name: "Claude",
        desc: "This agent make a move based on Claude Opus-4.8 model"
    },
    {
        name: "ChatGPT",
        desc: "This agent make a move based on OpenAi gpt-5.6-luna model"
    },
    {
        name: "Random",
        desc: "This agent choose a random move based on all possible moves it has"
    },
    {
        name: "Human",
        desc: "You are the one who decide what move to take"
    }
];

export default options;