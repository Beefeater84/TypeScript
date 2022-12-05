import React from 'react';
// Для установки библиотек в TS испольузем @types = npm i @types/react-router-dom
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {TodoPages} from "./pages/TodoPages";
import {AboutPage} from "./pages/AboutPage";
import {ThemeContextProvider} from "./components/UseContext/ThemeContext";
import {Box} from "./components/UseContext/Box";
import {User} from "./components/UserUseContext/User";


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <ThemeContextProvider>
                    <Box />
                    <Switch>
                        <Route component={TodoPages} path="/" exact/>
                        <Route component={AboutPage} path="/about"/>
                        <Route component={Box} path="/boxcontext"/>
                        <Route component={User} path="/userContext"/>
                    </Switch>
                </ThemeContextProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
