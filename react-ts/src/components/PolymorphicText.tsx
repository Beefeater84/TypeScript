import React from "react";


type TextOwnProps<E extends React.ElementType> = {
    size: 'sm' | 'md' | 'lg',
    color: 'primary' | 'secondary',
    children: React.ReactNode,
    as?: E
    // With this design, we can pass html elements into the "as". But we cannot pass properties corresponding to these elements (e.g. for label).
    // That's why we use the generic type
    // as?: React.ElementType
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

const Text = <E extends React.ElementType = 'div'>({size, color, children, as}: TextProps<E>) => {
    //
    const Component = as || 'div'

    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}

const App = () => {
    return (
        <>
            <Text as={'h1'} size={'lg'} color={'primary'}>Header</Text>
            <Text as={'p'} size={'md'} color={'primary'}>Paragraph</Text>
            <Text as={'label'} htmlFor={'someId'} size={'sm'} color={'primary'}>Label</Text>
        </>
    )
}