import React from 'react';

export const Navbar: React.FC = () => {
    return(
        <nav>
            <div className="nav-wrapper purple darken-2 px-1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">ToDo List</a></li>
                    <li><a href="/">Information</a></li>
                </ul>
            </div>
        </nav>
    )
}