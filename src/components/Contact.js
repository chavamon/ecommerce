import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-address">
          <h2>Address</h2>
          <p>123 Main Street</p>
          <p>City, State, ZIP</p>
        </div>
        <div className="contact-site">
          <h2>Website</h2>
          <p><a href="https://www.example.com">www.example.com</a></p>
        </div>
        <div className="contact-phone">
          <h2>Phone Number</h2>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
