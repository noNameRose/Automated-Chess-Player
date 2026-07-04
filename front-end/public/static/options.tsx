export type Agent = "Claude" | "ChatGPT" | "Human" | "Random";

export type option = {
    name: Agent,
    desc: string,
};

const options: option[] = [
    {
        name: "Claude",
        desc: "This agent make a move based on claude API"
    },
    // {
    //     name: "ChatGPT",
    //     desc: "This agent make a move based on ChatGPT API"
    // },
    // {
    //     name: "Random",
    //     desc: "This agent choose a random move based on all possible move it has"
    // },
    // {
    //     name: "Human",
    //     desc: "You are the one who decide what move to take"
    // }
];

export default options;