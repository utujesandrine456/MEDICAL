import React from 'react';
import { assets } from './assets/assets.jsx';
import './About.css';
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import Neurology from './neurology.jsx'
import New from './New.jsx'
import ContactCard from './ContactCard.jsx'
import Footer from './Footer.jsx'



const About = () => {
  return (
    <>
      <div className='main-conatiner' >
        <div className='bg-blackdoctors'>
          <img src={assets.blackdoctors} alt="Black doctors" className='bg-image'/>
          <h4>Home/ About us</h4>
          <h1>About us</h1>
        </div>
        <div className='middle-care'>
          <img src={assets.female_drs} alt="Female doctors" />
          <h3>WELCOME TO HOSPITAL NAME</h3>
          <h1>Best Care for Your
          <br />Good Health</h1>
          <ul>
            <li className='left'>A Passion for Healing</li>
            <li className='left'>All our best</li>
            <li className='left'>A Legacy of Excellence</li>
            <li className='right'>5-Star Care</li>
            <li className='right'>Believe in Us</li>
            <li className='right'>Always Caring</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Quisque placerat scelerisque tortor ornare ornare. Quisque<br /> placerat scelerisque tortor ornare ornare Convallis felis <br />vitae tortor augue. Velit nascetur proin massa in.<br /> Consequat faucibus porttitor enim et.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Quisque placerat scelerisque. Convallis felis vitae tortor<br /> augue. Velit nascetur proin massa in.</p>
          <div className='slider-container'>
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
          </div>
          
        </div>
      </div>
      <div className='about-neurology'>
        <Neurology/>
      </div>
      <div className='main-about-news'>
          <div className='about-news'>
            <h3>BETTER INFORMATION, BETTER HEALTH</h3>
            <h1>News</h1>
            <New />
          </div>
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
  );
};

export default About;
