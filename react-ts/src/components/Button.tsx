import React from 'react'

type ButtonProps = {
    // handleClick: () => void
    handleClick: (event: React.MouseEvent<HTMLElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={event => props.handleClick(event, 10)}> Click </button>
    )
}