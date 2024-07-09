import React from 'react';
import '../css/Shop.css';

const products = [
    { id: 1, name: 'Product 1', price: '$10.00', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: '$20.00', image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: '$30.00', image: 'path/to/image3.jpg' },
    // Add more products as needed
];

const Shop = () => {
    return (
        <div className="shop-container">
            <h1 className="shop-header">Shop</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">{product.price}</p>
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
