import React, { useState } from 'react'
import './Specialists.css'
import { FaHeartbeat } from "react-icons/fa"
import {specialists_doctors} from './assets/assets.jsx'

const Specialists = () => {
return (
    <div className='specialists'>
        <h3>ALWAYS CARING</h3>
        <h1>Our Specialists</h1>
        <div className="all-specialists">
            {specialists_doctors.map((specialist,index)=>{return <div className="specialist" key={index}><FaHeartbeat size={40} color='deepskyblue'style={{ marginTop: "30px" }}/><h5>{specialist}</h5></div>})}
        </div>
    </div>
  )
}
export default Specialists;