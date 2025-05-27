import React from 'react'
import { assets } from './assets/assets';
import './Contact.css';
import ContactCard from './ContactCard.jsx';
import Footer from './Footer.jsx'
import New from './New.jsx';



const Contact = () => {
  return (
    <>
      <div className='contacts-container'>
        <div className='bg-blackdoctors'>
          <img src={assets.contacts} alt="Black doctors" className='bg-image'/>
          <h4>Home/ Contact</h4>
          <h1>Our Contacts</h1>
        </div>
        <img src={assets.map} className='contact-image'/>
        <form className='contact-form'>
            <input placeholder="Name" />
            <input placeholder="Gender" id='right-one'/>
            <br />

            <input placeholder="Email" />
            <input placeholder="Phone" id='right-one' />
            <br /> 

            <input placeholder="Date" />
            
            <input placeholder="Time" id="right"/>
            
            <br />

            <input placeholder="Doctor" />
            
            <input placeholder="Department" id="right" />
            
            <br />
            <i class="fa-solid fa-angle-down"></i> 
            <i class="fa-solid fa-angle-down"></i><br></br>
            <i class="fa-solid fa-angle-down"></i>
            <i class="fa-solid fa-angle-down"></i> 
            
            <label for="message">Message</label>
            <br />
            <input type='submit' value="Submit"></input>
        </form>
        <div className='contact-about-forms'>
          <div className='about-contact' >
            <div className='headers'>
              <h3>GET IN TOUCH</h3>
              <h1>Contact</h1>
            </div>
            <ContactCard />
          </div>
        </div>
        <div className='main-about-contact'>
          <div className='about-news'>
            <div className='headers'>
              <h3>BETTER INFORMATION, BETTER HEALTH</h3>
              <h1>News</h1>
            </div>
            <New />
          </div>
        </div>
        <div className='contact-footer'>
          <div  className='about-footer'>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;