import React from 'react'

type TStylesAsProps = {
    styles: React.CSSProperties
}

const Container = () => {
    return (
        <StylesAsProps styles={{
            border: '1px solid black',
            padding: '1rem'
        }} />
    )
}

export const StylesAsProps = (props: TStylesAsProps) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}


