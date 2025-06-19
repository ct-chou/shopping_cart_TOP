import styles from './Home.module.css'
import {Nav} from '../Nav/Nav.jsx'

export default function Home({cartAmount}) {

  return (
    <div id={styles.container}>
        <header className={styles.header}>
            <h1>Another Dummy Online Store</h1>
            <Nav cartAmount={cartAmount}/>
        </header>

        <div className={styles.homeContainer}>
            <h1>Welcome to Our Store</h1>
            <p>Explore our products and add them to your cart!</p>
            <a href="/shop" className={styles.shopLink}>Go to Shop</a>
        </div>
        <footer className={styles.footer}>
            <p>&copy; 2025 Shopping Cart. All rights reserved.</p>
        </footer>
        
    </div>
  )
}


