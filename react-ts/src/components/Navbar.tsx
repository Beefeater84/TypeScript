import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
    return(
        <nav>
            <div className="nav-wrapper purple darken-2 px-1">
                <NavLink to="/" className="brand-logo">React + TypeScript</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">ToDo List</NavLink></li>
                    <li><NavLink to="/about">Information</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}