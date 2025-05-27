import React from 'react'
import { assets } from './assets/assets';
import './Services.css';
import ContactCard from './ContactCard.jsx'
import Footer from './Footer.jsx'

const Services = () => {
  return (
    <>
    <div >
      <div className='bg-blackdoctors'>
        <img src={assets.services_top} alt="Black doctors" className='female-doctor' />
        <h4>Home/ Services</h4>
        <h1>Our Services</h1>
      </div>
      <div className='main-card'>
        <img src={assets.pregnant_patient} />
        <h4>Free Checkup</h4>
        <p>Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing Quisque <br></br>placerat Convallis felis vitae <br></br>tortor augue. Velit nascetur massa in.</p>
        <a>Learn more</a><i class="fa-solid fa-arrow-right"></i>
      </div>
      <div className="services-container">
        {serviceData.map((service, index) => (
          <div key={index} className='services-card'>
            <img src={service.image} alt={service.title} />
            <span><i class="fa-solid fa-heart-circle-plus"></i></span>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <a href="#">Learn more</a><i className="fa-solid fa-arrow-right"></i>
          </div>
        ))}
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
    </div>
    </>
  );
};

const serviceData = [
  { title: "Free Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.", image: assets.pregnant_patient },
  { title: "Free Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.", image: assets.pregnant_patient },
  { title: "Free Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.", image: assets.pregnant_patient },
  { title: "Free Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.", image: assets.pregnant_patient },
  { title: "Free Checkup", description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.", image: assets.pregnant_patient }
];


export default Services;