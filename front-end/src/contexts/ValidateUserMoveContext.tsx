import { createContext } from "react";

type ValidateMoveFunc = (from: number[], to: number[]) => Promise<void>;

const ValidateUserMoveContext = createContext<ValidateMoveFunc | null>(null);

export default ValidateUserMoveContext;