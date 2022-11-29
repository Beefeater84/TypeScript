import React, {useState} from 'react'

type AuthUserT = {
    name: string,
    email: string
}

const HooksTypes = () => {

    
    // const [user, setUser] = useState<null | AuthUserT>(null)
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