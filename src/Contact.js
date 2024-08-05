import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="about-container-c">
      <img src={`${process.env.PUBLIC_URL}/bridget1.png`} className="bridget-image-contact" alt="Bridget" />
      <h1 className="contact-us">Contact Us</h1>
      <p>Welcome to our company. We are dedicated to providing the best service to our customers.</p>
      <div className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Your Phone" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
