import { createContext } from "react";

type IsDraggable = {
    isWhiteDraggable: boolean,
    isBlackDraggable: boolean
}

const DraggableContext = createContext<IsDraggable | null>(null);

export default DraggableContext;