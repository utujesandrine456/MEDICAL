import React from 'react'
import './Appointment.css';
import ContactCard from './ContactCard.jsx';
import Footer from './Footer.jsx'
import { assets } from './assets/assets';

const Appointment = () => {
  return (
    <>
    
    <div className='appointment-container'>
        <div className='bg-blackdoctors'>
            <img src={assets.book_appointment} alt="Black doctors" className='bg-image'/>
            <h4>Home/ Appointment</h4>
            <h1>Book an Appointment</h1>
        </div>
        <div className='appointment-header'>
            <h1>Book an Appointment</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Quisque placerat scelerisque tortor ornare ornare. Convallis<br></br> felis vitae tortor augue. Velit nascetur proin massa in.<br></br> Consequat faucibus porttitor enim et.</p>
        </div>
        <form className='contact-forms'>
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
        <div className='appointment-time'>
            <h1>Shedule hours</h1>
            <p> <span>Monday</span> <hr/> 09:00 AM - 07:00 PM</p>
            <p><span>Tuesday</span> <hr/> 09:00 AM - 07:00 PM</p>
            <p><span>Wednesday</span> <hr/> 09:00 AM - 07:00 PM</p>
            <p><span>Thursday</span> <hr/> 09:00 AM - 07:00 PM</p>
            <p><span>Friday</span> <hr/> 09:00 AM - 07:00 PM</p>
            <p><span>Satarday</span> <hr/> 09:00 AM - 07:00 PM</p>
            <p><span>Sunday</span> <hr/> 09:00 AM - 07:00 PM</p>
            <span><hr></hr></span> 
            <h3>Emergency</h3>
            <i className="fa-solid fa-phone-volume"></i>
            <h4>(237) 681-812-255</h4>
        </div>
        <img src={assets.map} className='contact-image'/>
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
  )
}

export default Appointment;