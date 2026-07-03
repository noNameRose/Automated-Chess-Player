import type { ComponentProps, ReactNode } from "react";

interface ButtonProp  {
    children: ReactNode,
    button?: ComponentProps<'button'>
};

const Button = ({children, ...props}: ButtonProp) => {
    return (
        <div>
            <div {...props}>
                {children}
            </div>
            <div></div>
        </div>
    );
};

export default Button;