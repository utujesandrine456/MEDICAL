import React from 'react'
import {Contact } from './assets/assets.jsx' 
import './ContactCard.css';

const ContactCard = () => {
  return (
    <div className="contact-cards-container">
      {Contact.map((item, index) => (
        <div className="contact-card" key={index}>
          <div className="contact-card-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.descr1}</p>
          <p>{item.descr2}</p>
        </div>
      ))}
      
    </div>
  );
};

export default ContactCard;