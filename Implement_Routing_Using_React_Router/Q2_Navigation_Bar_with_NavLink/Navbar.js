import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink> | {" "}
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink> | {" "}
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink> | {" "}
            <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>Products</NavLink>
        </nav>
    );
}

export default Navbar;
