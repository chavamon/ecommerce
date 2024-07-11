import React, { useEffect, useState } from 'react';
import '../css/Shop.css';
import { API_URL } from '../urls'; 

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched products:', data); // Debugging line
                setProducts(data);
                console.log("data:::::::", data)
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="shop-container">
            <h1 className="shop-header">Shop</h1>
            <div className="product-grid">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-price">{product.price}</p>
                            <p className="product-category">{product.category}</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                    ))
                ) : (
                    <p>No products available</p> // Fallback message
                )}
            </div>
        </div>
    );
};

export default Shop;