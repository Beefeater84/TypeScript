import React, {useReducer} from 'react'

const initialState = {count: 0}

type TCounterState = {
    count: number
}


// type TCounterAction = {
//     // type: string,
//     type: 'increment' | 'decrement',
//     payload: number
// }

// There may be several situations:
// In 'increment' | 'decrement' we need payload
// In 'reset' we do not need
// The best way to solve this is to create 2 types


type TUpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type TResetAction = {
    type: 'reset',
}

type TCounterAction = TUpdateAction | TResetAction


function reducer(state: TCounterState, action: TCounterAction) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment 10</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement 10</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )
}
