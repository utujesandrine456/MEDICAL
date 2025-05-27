import React from 'react'
import { assets } from './assets/assets';
import { outdoctors } from './assets/assets.jsx'
import './Doctors.css';
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import ContactCard from './ContactCard.jsx'
import Footer from './Footer.jsx'
import New from './New.jsx';

const Doctors = () => {
  return (
    <>
      <div className='bg-blackdoctors'>
        <img src={assets.blackdoctors} alt="Black doctors" />
        <h4>Home/ Doctors</h4>
        <h1>Our Doctors</h1>
      </div>
      <div className="doctors-container">
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
      </div>
      <div className='second-container'>
        <div className="doctors-container">
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
        </div>
      </div>
      <div className='slider'>
        <BiSolidQuoteSingleRight  style={{ color: "#BFD2F8", fontSize: "30px", position: 'absolute', left: '250px', top: '-227px'}}  />
        <BiSolidQuoteSingleRight  style={{ color: "#BFD2F8", fontSize: "30px", position: 'relative', top: '-296px', left: '270px'}} />
        <img src={assets.testimonials_bac} className='testimonial_bac' alt="Testimonial background" />
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Quisque placerat scelerisque tortor ornare ornare. Quisque<br /> placerat scelerisque felis vitae tortor augue. Velit nascetur<br /> Consequat faucibus porttitor enim et.</h4>
        <hr />
        <h3>John Doe</h3>
        <svg >
          <circle cx="240" cy="10" r="7" fill="white" />
          <circle cx="265" cy="10" r="7" fill="#BFD2F8" />
          <circle cx="290" cy="10" r="7" fill="white" />
        </svg>
      </div>
      <div className='about-news'>
        <h3>BETTER INFORMATION, BETTER HEALTH</h3>
        <h1>News</h1>
        <New />
      </div>
      <div className='about-contact' >
        <div className='headers'>
                <h3>GET IN TOUCH</h3>
                <h1>Contact</h1>
              </div>
        <ContactCard />
      </div>
      <div  className='about-footer'>
        <Footer/>
      </div>
    </>
  )
}

export default Doctors;