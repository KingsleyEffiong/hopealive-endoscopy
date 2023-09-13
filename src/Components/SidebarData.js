import React from 'react'
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';


export const sidebarData = [ 

    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillTaobaoSquare/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon:<AiIcons.AiFillTaobaoSquare/>,
        cName: 'nav-text'
    },
    // {
    //     title: 'Contact',
    //     path: '/contact',
    //     icon:<AiIcons.AiFillContacts/>,
    //     cName: 'nav-text'
    // },
    {
        title: 'Services',
        path: '/services',
        icon:<AiIcons.AiFillAlert/>,
        cName: 'nav-text'
    },
    {
        title: 'Doctors Appointment',
        path: '/appointment',
        icon:<AiIcons.AiFillCompass/>,
        cName: 'nav-text'
    },
]