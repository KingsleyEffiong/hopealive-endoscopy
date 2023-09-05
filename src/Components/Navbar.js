import React, {useState} from 'react'
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './Navbar.css'
import * as AiIcons from 'react-icons/ai';
import { sidebarData } from './SidebarData';
import {IconContext} from 'react-icons'




function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = ()=>setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <BrowserRouter>
    <div className="navbar">

<Link to="#" className='menu-bars' >
   
<FaIcons.FaBars onClick={showSidebar}/>
</Link>
<div id='logo'>
    <h1>Hopealive Endoscopy & Fertility </h1>
  
    </div>
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
    </div>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar} >
    
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
             
                </li>
                {sidebarData.map((item, index) =>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}> 
                                {item.icon}
                                <span>{item.title}</span> 
                            </Link>
                        </li>
                    ) 
                })}
            </ul>
        </nav>
        </BrowserRouter>
        </IconContext.Provider>

    </>
  )
}

export default Navbar