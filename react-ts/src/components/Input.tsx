import React from 'react'

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLElement>) => void
}

export const Input = (props: InputProps) => {

    // Another way to designate a ChangeEvent within a component
    // put handleInputChange instead of props.handleChange
    const handleInputChange = (event: React.ChangeEvent<HTMLElement>) => {

        console.log(event)
    }

    return (
        <input type="text" value={props.value} onChange={props.handleChange}/>
    )
}