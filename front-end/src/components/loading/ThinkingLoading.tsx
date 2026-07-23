import { useContext } from "react";
import ThinkingContext from "../../contexts/ThinkingContext";

const ThinkingLoading = ({firstPlayer}: {firstPlayer: boolean}) => {
    const thinkingContext = useContext(ThinkingContext);
    return (
        <div style={
            {
                opacity: (thinkingContext?.firstPlayerThinking === firstPlayer) ? 1 : 0
            }
        }>Thinking....</div>
    );
};

export default ThinkingLoading;