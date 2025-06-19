import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { FaShoppingCart } from 'react-icons/fa';

export const Nav = ({cartAmount}) => (
    <nav className={styles.nav}>
        <ul className="nav-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Products</Link>
            </li>
            <li>
                <Link to="/cart" className={styles.cartLink}>
                    <div className={styles.cartIconContainer}>
                            <FaShoppingCart className={styles.cartIcon} />
                            {cartAmount > 0 && (
                                <span className={styles.cartBadge}>{cartAmount}</span>
                            )}
                        </div>
                     Cart 
                </Link>
            </li>
        </ul>
    </nav>
);

export default Nav;