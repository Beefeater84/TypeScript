import {Login} from "./Login";
import React from "react";
import {ProfileProps} from "./Profile";

type AuthProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps>
}

export const Auth = ({isLoggedIn, component: Component}: AuthProps) => {
    if (isLoggedIn) {
        return <Component name={"Tony"}/>
    } else {
        return <Login/>
    }
}