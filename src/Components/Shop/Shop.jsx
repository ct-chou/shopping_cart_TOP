import React, {useState, useEffect} from "react";
import styles from "./Shop.module.css"; // Optional: for styling
import { Nav } from "../Nav/Nav.jsx"; // Assuming you have a Nav component
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Shop(props) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantities, setQuantities] = useState({});

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
                 // Initialize quantities for all products to 1
                const initialQuantities = {};
                data.forEach(item => {
                    initialQuantities[item.id] = 1;
                });
                setQuantities(initialQuantities);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to load products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

        // Handle quantity changes
    const handleQuantityChange = (id, newQuantity) => {
        // Prevent negative or zero quantities
        if (newQuantity < 1) return;
        
        setQuantities({
            ...quantities,
            [id]: newQuantity
        });
    };

    const subAddToCart = (itemId, quantity) => {
        quantities[itemId] = 1; //reset quantity to 1 after adding to cart
        props.addToCart(quantity);
    };
    
    if (loading) return <div className={styles.loading}>Loading products...</div>;
    if (error) return <div className={styles.error}>{error}</div>;


    return (
        <div className={styles.shopContainer}>
            <header className={styles.header}>
                        <Link to="/" className={styles.headerLink}>
                            <h1>Another Dummy Online Store</h1>
                        </Link>
                        <Nav cartAmount={props.cartAmount}/>
            </header>
            <h1>Shop</h1>
            <div className={styles.itemContainer}>
                {items.map((item) => (
                    <div className={styles.itemCard} key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h2>{item.title}</h2>
                        <p className={styles.itemDescription}>{item.description}</p>
                        {/* <div className="item-footer">
                            <span>${item.price.toFixed(2)}</span>
                            <button>Add to Cart</button>
                        </div> */}
                        <div className={styles.itemFooter}>
                            <span className={styles.price}>${item.price.toFixed(2)}</span>
                            
                            <div className={styles.quantityControls}>
                                <button 
                                    className={styles.quantityBtn}
                                    onClick={() => handleQuantityChange(item.id, quantities[item.id] - 1)}
                                >
                                    -
                                </button>
                                <span className={styles.quantity}>{quantities[item.id]}</span>
                                <button 
                                    className={styles.quantityBtn}
                                    onClick={() => handleQuantityChange(item.id, quantities[item.id] + 1)}
                                >
                                    +
                                </button>
                            </div>
                            
                            <button 
                                className={styles.addToCartBtn}
                                onClick={() => subAddToCart(item.id, quantities[item.id])}
                            >
                                Add to Cart
                            </button>
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

Shop.propTypes = {
    addToCart: PropTypes.func.isRequired,
    cartAmount: PropTypes.number.isRequired
};

export default Shop;