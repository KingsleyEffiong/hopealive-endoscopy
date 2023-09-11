import React from 'react'
import './Footer.css'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
        <div className='footer-container'>
<h3>HopeAlive Endoscopy Clinic.Inc </h3>
<div id='social'>
  <Link to=''>
     <FaIcons.FaFacebook id='social'/>
  </Link> 
   <Link to=''>
     <FaIcons.FaTwitter id='social'/>
   </Link>
    <Link to=''>
        <FaIcons.FaWhatsapp  id='social'/>
    </Link>
    <Link to=''>
        <FaIcons.FaYoutube  id='social'/>
    </Link>
    </div>
        </div>
    </>
  )
}

export default Footer