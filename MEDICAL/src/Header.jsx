import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
        <div className="header-container">
            <h1>MED<span>DICAL</span></h1>
            <h3>EMERGENCY</h3>
            <i className="fa-solid fa-phone-volume"></i>
            <h4>(237) 681-812-255</h4>
            <h3>WORKHOUR</h3>
            <i class="fa-regular fa-clock"></i>
            <h4>09:00 - 20:00 Everyday</h4>
            <p>LOCATION</p>
            <i className="fa-solid fa-location-dot"></i>
            <h4>0123 Some Place</h4>
        </div>
        <nav>
          <div className='nav-links'>
            <Link className='home-link' to='/'>Home</Link>
            <Link to='/about'>About us</Link>
            <Link to='/services'>Services</Link>
            <Link to='/doctors' >Doctors</Link>
            <Link to='/news'>News</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <button><Link to='/appointment'> Appointment</Link></button>
        </nav>
        <div className='circle'></div>
      </div>
    </>
  )
}

export default Header;