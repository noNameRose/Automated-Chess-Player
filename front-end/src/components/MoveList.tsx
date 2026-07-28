const MoveList = ({moves}: {moves: string[]}) => {
    return (
        <div className="flex flex-col gap-4">
            {moves.map(move => (
                        <div>{move}</div>
            ))}
        </div>
    );
};

export default MoveList;