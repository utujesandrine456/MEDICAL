import React from 'react';
import './Footer.css'; 
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";


const Footer = () => {
  return (
    <>
        <div className='main'>
           <h1>MEDDICAL</h1><br></br>
           <p className='bottom'>Leading the Way in Medical<br></br>Execellence, Trusted Care.</p>
            <div className='list-of-links'>
                <h3>Important Links</h3>
                <p>Appointment</p>
                <p>Doctors</p>
                <p>Services</p>
                <p>About Us</p>
            </div>
            <div className='list-of-links'>
                <h3>Contact Us</h3>
                <p>Call: (237) 681-812-255</p>
                <p>Email: fildineeesoe@gmail.com</p>
                <p>Address: 0123 Some place </p>
                <p>Some country</p>
            </div>
            <div className='list-of-links'>
                <h3 className='left'>Newsletter</h3>
                <button>Enter your email address</button>
            </div>
            <hr></hr>
            <h6>&copy; 2021 Hospital Name. All Rights Reserved by PNTEC-LTD.</h6>
            <div className="icons">
                <TiSocialLinkedin style={{ fontSize: '15px', color: '#1F2B6C', margin: '0 10px', cursor: 'pointer', backgroundColor: '#BFD2F8', borderRadius: '50%', width: '30px', height: '30px', position: 'relative', top: '360px'}} />
                <FaFacebookF  style={{ fontSize: '15px', color: '#1F2B6C', margin: '0 10px', cursor: 'pointer', backgroundColor: '#BFD2F8', borderRadius: '50%' , width: '30px', height: '30px', position: 'relative', top: '360px' }} />
                <IoLogoInstagram style={{ fontSize: '15px', color: '#1F2B6C', margin: '0 10px', cursor: 'pointer', backgroundColor: '#BFD2F8', borderRadius: '50%',  width: '30px', height: '30px', position: 'relative', top: '360px' }} />
            </div>

        </div>
    </>
  )
}

export default Footer;