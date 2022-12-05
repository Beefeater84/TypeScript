import React, {useEffect, useRef, useState} from 'react'
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

type AuthUserT = {
    name: string,
    email: string
}

const HooksTypes = () => {

    // const [user, setUser] = useState<null | AuthUserT>(null)

    // Assertion - {} as AuthUserT
    const [user, setUser] = useState<AuthUserT>({} as AuthUserT)

    const handleLogin = () => {
        setUser({
            name: "Tony",
            email: "site2max@gmail.com"
        })
    }


    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </>
    )
}


const InputEl = () => {

    // null! - means, the element do exist and we can write input.current.focus() instead of inout?.current.focus()
    const input = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        input.current.focus()
    }, [])

    return (
        <input type="text" ref={input}/>
    )
}


const Timer = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            Timer - {timer}
            <button onClick={() => stopTimer()}></button>
        </div>
    )

}

