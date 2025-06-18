import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.module.css';

export const Nav = () => (
    <nav className="nav">
        <ul className="nav-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Products</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;