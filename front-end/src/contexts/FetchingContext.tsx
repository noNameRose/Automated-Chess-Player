import { createContext } from "react";

type FetchingContextType = {
    isFetching: boolean,
    handleFetching: (isFetching: boolean) => void
};

const FetchingContext = createContext<FetchingContextType | null>(null);


export default FetchingContext;