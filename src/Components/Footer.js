import React from 'react'
import './Footer.css'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
        <div className='footer-container'>
<h3>HopeAlive Endoscopy Clinic.Inc </h3>
<div id='social-icons'>
  <Link to=''>
     <FaIcons.FaFacebook className='social'/>
  </Link> 
   <Link to=''>
     <FaIcons.FaTwitter className='social'/>
   </Link>
    <Link to=''>
        <FaIcons.FaWhatsapp className='social'/>
    </Link>
    <Link to=''>
        <FaIcons.FaYoutube className='social'/>
    </Link>
    </div>
        </div>
    </>
  )
}

export default Footer