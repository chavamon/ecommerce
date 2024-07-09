import React from 'react';
import '../css/About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">About Us</h1>
      <img src="https://via.placeholder.com/800x400" alt="About Us" className="about-image" />
      <p className="about-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="about-paragraph">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className="about-paragraph">
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
      </p>
      <a href="/contact" className="about-link">Contact Us</a>
      <br />
      <button className="about-button">Learn More</button>
    </div>
  );
}

export default About;