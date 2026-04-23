import type { ComponentPropsWithoutRef, ReactNode } from "react";

const Button = ({children, ...props}: {children: ReactNode} & ComponentPropsWithoutRef<'button'>) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Button;