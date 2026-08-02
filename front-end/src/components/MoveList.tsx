const MoveList = ({moves}: {moves: string[]}) => {
    return (
        <div className="flex flex-col gap-4 items-center grow">
            {moves.map(move => (
                        <div>{move}</div>
            ))}
        </div>
    );
};

export default MoveList;