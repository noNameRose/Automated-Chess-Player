import { createContext, type Ref } from "react";

const TitleContext = createContext<Ref<HTMLHeadingElement> | undefined>(undefined);

export default TitleContext;