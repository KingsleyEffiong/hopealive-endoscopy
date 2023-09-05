import React from 'react'
import {FaBars}from  'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const sidebarData = [ 
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon:<AiIcons.AiFillTaobaoSquare/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon:<AiIcons.AiFillContacts/>,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon:<AiIcons.AiFillAlert/>,
        cName: 'nav-text'
    },
]