import styles from './Cart.module.css'
import {Nav} from '../Nav/Nav.jsx'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Cart(props) {

  return (
    <div id={styles.container}>
        <header className={styles.header}>
            <Link to="/" className={styles.headerLink}>
              <h1>Another Dummy Online Store</h1>
            </Link>
            <Nav cartAmount={props.cartAmount}/>
        </header>

        <div className={styles.homeContainer}>
            <h1>Placeholder for Cart (not yet implemented)</h1>
            
            <Link to="/shop" className={styles.shopLink}>Return to Shop</Link>
        </div>
        <footer className={styles.footer}>
            <p>&copy; 2025 Shopping Cart. All rights reserved.</p>
        </footer>
        
    </div>
  )
}

Cart.propTypes = {
    cartAmount: PropTypes.number.isRequired
};
