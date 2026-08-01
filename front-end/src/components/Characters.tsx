const Characters = ({characters}: {characters: string[]}) => {
    return (
        <div className="flex font-black text-white"
            style={
                {
                    fontSize: "clamp(37px, 5vw, 90px)"
                }
            }
        >
            {characters.map(ch => (
                <p className="character translate-y-75">
                    {ch}
                </p>
            ))}
        </div>
    );
};

export default Characters;