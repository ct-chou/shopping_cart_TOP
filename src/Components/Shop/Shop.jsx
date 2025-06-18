import React from "react";
import "./Shop.module.css"; // Optional: for styling

const items = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        image: "https://via.placeholder.com/150",
        description: "High-quality wireless headphones with noise cancellation.",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 99.99,
        image: "https://via.placeholder.com/150",
        description: "Track your fitness and notifications on the go.",
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 29.99,
        image: "https://via.placeholder.com/150",
        description: "Portable speaker with deep bass and long battery life.",
    },
];

function Shop() {
    return (
        <div className="shop-container">
            <h1>Shop</h1>
            <div className="items-grid">
                {items.map((item) => (
                    <div className="item-card" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="item-footer">
                            <span>${item.price.toFixed(2)}</span>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;