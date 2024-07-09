import React from 'react';
import '../css/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-header">Welcome to My Website</h1>
            <p className="home-paragraph">
                This is a simple home page for my website. Here you can find various information about what we do.
            </p>
            <a href="/about" className="home-link">Learn more about us</a>
            <img src="path/to/image.jpg" alt="Description" className="home-image" />
            <button className="home-button">Click Me</button>
        </div>
    );
};

export default Home;