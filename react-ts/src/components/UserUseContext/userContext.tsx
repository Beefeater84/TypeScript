import React, {createContext, useState} from "react";

export type AuthUser = {
    name: string,
    email: string
}


type userContextType = {
    user: AuthUser | null,
    setUser:  React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProp = {
    children: React.ReactNode
}

// export const UserContext = createContext<userContextType | null>(null)
export const UserContext = createContext({} as userContextType)

export const UserContextProvider = ({children}: UserContextProviderProp) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>

}