import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="#home" className="navbar-link">Home</a>
                </li>
                <li>
                    <a href="#projects" className="navbar-link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="navbar-link">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;