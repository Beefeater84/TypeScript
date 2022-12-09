import React from "react";

// & React.ComponentProps<'button'> add all props from React Button

type ButtonProps = {
    variant: 'primary' | 'secondary',
} & React.ComponentProps<'button'>

export const Button = ({variant, children, ...rest} : ButtonProps) => {
    return (
        <button className={`btn-style-${variant}`} {...rest}>
            {children}
        </button>
    )
}

// Now children - is a React.ReactNode, but if I want to specify it as a string only
// Omit<React.ComponentProps<'button'>, 'children'>  - this excludes children from React.ComponentProps<'button'>

type ButtonProps2 = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const Button2 = ({variant, children, ...rest} : ButtonProps2) => {
    return (
        <button className={`btn-style-${variant}`} {...rest}>
            {children}
        </button>
    )
}