import React from 'react';
// Для установки библиотек в TS испольузем @types = npm i @types/react-router-dom
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {TodoPages} from "./pages/TodoPages";
import {AboutPage} from "./pages/AboutPage";


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route component={TodoPages} path="/" exact/>
                    <Route component={AboutPage} path="/about"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
