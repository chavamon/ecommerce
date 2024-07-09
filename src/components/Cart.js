import React, { useState } from 'react';
import '../css/Cart.css';

const initialCartItems = [
    { id: 1, name: 'Product 1', price: 10.00, quantity: 1, image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: 20.00, quantity: 2, image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: 30.00, quantity: 1, image: 'path/to/image3.jpg' },
    // Add more items as needed
];

const Cart = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1 className="cart-header">Shopping Cart</h1>
            <ul className="cart-item-list">
                {cartItems.map(item => (
                    <li key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h2 className="cart-item-name">{item.name}</h2>
                            <p className="cart-item-price">${item.price.toFixed(2)}</p>
                            <div className="cart-item-quantity">
                                <input 
                                    type="number" 
                                    className="quantity-input" 
                                    value={item.quantity} 
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                />
                                <button 
                                    className="remove-button" 
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="total-price">
                Total: ${totalPrice.toFixed(2)}
            </div>
        </div>
    );
};

export default Cart;