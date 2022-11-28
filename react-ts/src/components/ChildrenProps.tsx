import React from 'react'

export function Header(){
    return (
        <HeaderText>Placeholder text</HeaderText>
    )
}

type HeaderTextProps = {
    children: string
    // children: React.ReactNode
}

function HeaderText(props: HeaderTextProps){
    return (
        <h1>{props.children}</h1>
    )
}