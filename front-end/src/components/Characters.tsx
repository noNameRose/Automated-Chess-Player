const Characters = ({characters}: {characters: string[]}) => {
    return (
        <div className="flex gap-4">
            {characters.map(ch => (
                <p>
                    {ch}
                </p>
            ))}
        </div>
    );
};

export default Characters;