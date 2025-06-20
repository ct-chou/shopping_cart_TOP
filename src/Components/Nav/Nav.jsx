import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Nav = (props) => (
    <nav className={styles.nav}>
        <ul className="nav-list">
            <li>
                <Link to="/" className={styles.link}>Home</Link>
            </li>
            <li>
                <Link to="/shop" className={styles.link}>Products</Link>
            </li>
            <li>
                <Link to="/cart" className={styles.cartLink + ' ' + styles.link}>
                    <div className={styles.cartIconContainer}>
                            <FaShoppingCart className={styles.cartIcon} />
                            {props.cartAmount > 0 && (
                                <span className={styles.cartBadge}>{props.cartAmount}</span>
                            )}
                        </div>
                     Cart 
                </Link>
            </li>
        </ul>
    </nav>
);

Nav.PropTypes = {
    cartAmount: PropTypes.number.isRequired,
};

export default Nav;