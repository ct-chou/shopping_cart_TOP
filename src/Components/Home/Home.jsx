import styles from './Home.module.css'
import {Nav} from '../Nav/Nav.jsx'
import { Link } from 'react-router-dom';

export default function Home({cartAmount}) {

  return (
    <div id={styles.container}>
        <header className={styles.header}>
            <Link to="/" className={styles.headerLink}>
              <h1>Another Dummy Online Store</h1>
            </Link>
            <Nav cartAmount={cartAmount}/>
        </header>

        <div className={styles.homeContainer}>
            <h1>Welcome to Our Store</h1>
            <p>Explore our products and add them to your cart!</p>
            <Link to="/shop" className={styles.shopLink}>Go to Shop</Link>
        </div>
        <footer className={styles.footer}>
            <p>&copy; 2025 Shopping Cart. All rights reserved.</p>
        </footer>
        
    </div>
  )
}


