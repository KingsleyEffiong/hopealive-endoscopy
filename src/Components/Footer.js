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
  <Link to='https://www.facebook.com/profile.php?id=61551202112097'>
     <FaIcons.FaFacebook id='social'/>
  </Link> 
   <Link to='https://twitter.com/Hopealive152'>
     <FaIcons.FaTwitter id='social'/>
   </Link>

    <Link to='https://www.youtube.com/@HopealiveClinic'>
        <FaIcons.FaYoutube  id='social'/>
    </Link>
    </div>
        </div>
    </>
  )
}

export default Footer