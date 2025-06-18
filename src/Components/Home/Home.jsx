import { useState } from 'react'
import './Home.module.css'
import {Nav} from '../Nav/Nav.jsx'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav />
        <div className="home-container">
            <h1>Welcome to Our Shopping Cart</h1>
            <p>Explore our products and add them to your cart!</p>
            <button onClick={() => setCount(count + 1)}>
                Count is: {count}
            </button>
        </div>
        <footer className="footer">
            <p>&copy; 2025 Shopping Cart. All rights reserved.</p>
        </footer>
        
    </>
  )
}


