import React from 'react'
import {outdoctors } from './assets/assets.jsx' 
import './neurology.css';

const Neurology = () => {
  return (
    <div className="doctors-container">
      <div className='headers'>
        <h3>TRUSTED CARE</h3>
        <h1>Our doctors</h1>
      </div>
      {outdoctors.map((doctor, index) => (
        <div className="doctor-card" key={index}>
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <div className='key1'>
            <h3>{doctor.name}</h3>
            <p>{doctor.title}</p>
            <div className="social-icons">{doctor.icon}</div>
          </div>
          <button className="profile-btn">{doctor.more}</button>
        </div>
      ))}
      <svg className='balls'>
        <circle cx="240" cy="10" r="7" fill="#BFD2F8" />
        <circle cx="265" cy="10" r="7" fill="#1F2B6C" />
        <circle cx="290" cy="10" r="7" fill="#BFD2F8" />
      </svg>
    </div>
  )
}

export default Neurology;
