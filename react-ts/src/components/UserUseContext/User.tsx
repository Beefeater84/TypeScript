import {useContext} from "react";
import {UserContext} from "./userContext";

export const User = () => {

    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name: 'Tony',
                email: 'tony@gmail.com'
            })

        }
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)

        }
    }

    return (
        <div>
            <button onClick={handleLogin} />
            <button onClick={handleLogout} />
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}