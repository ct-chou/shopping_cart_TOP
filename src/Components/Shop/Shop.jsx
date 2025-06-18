import React, {useState, useEffect} from "react";
import styles from "./Shop.module.css"; // Optional: for styling
import { Nav } from "../Nav/Nav.jsx"; // Assuming you have a Nav component

// const items = [
//     {
//         id: 1,
//         name: "Wireless Headphones",
//         price: 59.99,
//         image: "https://via.placeholder.com/150",
//         description: "High-quality wireless headphones with noise cancellation.",
//     },
//     {
//         id: 2,
//         name: "Smart Watch",
//         price: 99.99,
//         image: "https://via.placeholder.com/150",
//         description: "Track your fitness and notifications on the go.",
//     },
//     {
//         id: 3,
//         name: "Bluetooth Speaker",
//         price: 29.99,
//         image: "https://via.placeholder.com/150",
//         description: "Portable speaker with deep bass and long battery life.",
//     },
// ];

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://fakestoreapi.com/products');
                
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to load products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className={styles.loading}>Loading products...</div>;
    if (error) return <div className={styles.error}>{error}</div>;


    return (
        <div className={styles.shopContainer}>
            <header className={styles.header}>
                        <h1>Another Dummy Online Store</h1>
                        <Nav />
            </header>
            <h1>Shop</h1>
            <div className={styles.itemContainer}>
                {items.map((item) => (
                    <div className={styles.itemCard} key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h2>{item.title}</h2>
                        <p className={styles.itemDescription}>{item.description}</p>
                        <div className="item-footer">
                            <span>${item.price.toFixed(2)}</span>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <footer className={styles.footer}>
                <p>&copy; 2025 Shopping Cart. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Shop;