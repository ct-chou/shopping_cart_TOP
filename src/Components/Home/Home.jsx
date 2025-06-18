import { useState } from 'react'
import  styles from './Home.module.css'
import {Nav} from '../Nav/Nav.jsx'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div id={styles.container}>
        <header className={styles.header}>
            <h1>Another Dummy Online Store</h1>
            <Nav />
        </header>

        <div className={styles.homeContainer}>
            <h1>Welcome to Our Store</h1>
            <p>Explore our products and add them to your cart!</p>
            <button onClick={() => setCount(count + 1)}>
                Count is: {count}
            </button>
        </div>
        <footer className={styles.footer}>
            <p>&copy; 2025 Shopping Cart. All rights reserved.</p>
        </footer>
        
    </div>
  )
}


