import React from 'react'
import './Home.css'
import { assets } from "./assets/assets.jsx"
import Specialists from './Specialists.jsx'
import ManDoctor from './Man-doctor.jsx'
import Neurology from './neurology.jsx'
import New from './New.jsx'
import ContactCard from './ContactCard.jsx'
import Footer from './Footer.jsx'


const Home = () => {
  return (
    <>  
        <div className='home-container'>
          <div className='container'>
            <div className='home-img'>
              <img src={assets.doctor}/>
              <h3>CARING FOR LIFE</h3>
              <h1>Leading the Way<br/>
              in Medical Excellence</h1>
              <button>Our Services</button>
            </div>
          </div>
          
          <div className='cards'>
              <div className="card1">
                <h4>Book an Appointment</h4>
                <i className=" fa-solid fa-calendar-days"></i>
              </div>
              <div className="card2">
                <h4>Book an Appointment</h4>
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="card3">
                <h4>Book an Appointment</h4>
                <i class="fa-solid fa-money-bill"></i>
              </div>
          </div>
          <div className='small-container'>
              <h3>WELCOME TO MEDDICAL</h3>
              <h1>A Great Place to Receive Care</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat <br></br>scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur <br></br> proin massa in. Consequat faucibus porttitor enim et.</p>
              <a>Learn more</a><i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className='bg-blackdoctors'>
            <img src={assets.blackdoctors} />
          </div>
            <div className="blackdoctors">
              <h3>CARE YOU CAN BELIEVE IN</h3>
              <h1>Our Services</h1>
              <h4>A passion for putting patients first.</h4>
              <ul>
                <li className='left'>A Passion for Healing</li>
                <li className='left'>All our best</li>
                <li className='left'>A Legacy of Excellence</li>
                <li className='right'>5-Star Care</li>
                <li className='right'>Believe in Us</li>
                <li className='right'>Always Caring</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Quisque placerat scelerisque tortor ornare ornare. Quisque<br/> placerat scelerisque tortor ornare ornare Convallis felis <br/>vitae tortor augue. Velit nascetur proin massa in.<br/> Consequat faucibus porttitor enim et.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Quisque placerat scelerisque. Convallis felis vitae tortor<br/> augue. Velit nascetur proin massa in.</p>
              <div className='form-icon'>
                  <i class="fa-solid fa-check-to-slot"></i>
                  <h5 className='checkup'>Free Checkup</h5>
                  <i class="fa-regular fa-heart"></i>
                  <h5 className='heart'>Cardiogram</h5>
                  <i class="fa-solid fa-dna"></i>
                  <h5 className='dna'>Dna Testing</h5>
                  <i class="fa-solid fa-droplet"></i>
                  <h5 className='blood'>Blood Bank</h5>
                  <h5 className='view'>View All</h5>
              </div>
              <div className="patients">
                <img src={assets.pregnant_patient}/>
                <img src={assets.three_female_drs}/>
              </div>
              <Specialists />
              <ManDoctor/>
              <div className='home-neurology'>
                  <Neurology/>
              </div>
              <h3>BETTER INFORMATION, BETTER HEALTH</h3>
              <div className='home-news'>
                <h1>News</h1>
                <New />
              </div>
              <div className='headers'>
                <h3>GET IN TOUCH</h3>
                <h1>Contact</h1>
              </div>
              <ContactCard />
              <Footer/>
            </div>
            
        </div>
    </>
    )
}

export default Home;