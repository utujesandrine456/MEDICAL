import React from 'react'
import './Mandoctor.css'
import { assets } from "./assets/assets.jsx"

const ManDoctor = () => {
  return (
    <>
    <div className='Man-doctor'>
        <img src={assets.booking}></img>
        <h3>Book an Appointment</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Quisque placerat scelerisque tortor ornare<br/> ornare. Convallis felis vitae tortor augue. Velit<br></br> nascetur proin massa in. Consequat faucibus<br></br> porttitor enim et.</p>
    </div>
    <form>
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
    </>
    
  )
}

export default ManDoctor;