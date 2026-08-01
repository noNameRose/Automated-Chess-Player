const Characters = ({characters}: {characters: string[]}) => {
    return (
        <div className="flex font-black text-white text-7xl">
            {characters.map(ch => (
                <p className="character">
                    {ch}
                </p>
            ))}
        </div>
    );
};

export default Characters;