import React from 'react'
import './Home.css'
import * as FaIcons from 'react-icons/fa';
import SliderData from '../SliderData';
import ImageSlider from '../ImageSlider';

function Home() {
  return (
    <>
        <ImageSlider slides = {SliderData}/>
        
        <main>
            <div id='body-content'>
                
            <h2 id='text-header'>Caring for the growing needs of our community.</h2>
            <p id='text-content'>
                For more than a decade, people from all walks of life have found answers at Hopealive Endoscopy & Fertility Clinic. Hospital's main campus is location at the south of the Country. In addition, a number of programs function outside the actual one. Here are some reason why more than a million people each year chooses Hopealive Endoscopy & Fertility Clinic for their medical care.<br/><br/>
                <ul>
                    <li>Experienced doctos in every specialty</li>
                    <li>Simplify a company's legal project management approach</li>
                    <li>Satisfied patients and uparalleled Experience</li>
                </ul>
            </p>
            </div>
            <div id='body-content'>
            <h2 id='text-header'>Working Hours</h2>
            <p id='text-content'>
                <table cellSpacing='18px'>
                    <tr >
                        <td >Monday  -   Friday</td>
                        <td>07.00   -   24.00</td>
                    </tr>
                    <tr >
                        <td >Saturdays</td>
                        <td>09.00   -   24.00</td>
                    </tr>
                    <tr >
                        <td >Sundays</td>
                        <td>09.00   -   24.00</td>
                    </tr>
                </table>
            </p>
            <div id='emergency-container'>
            <p id='text-content'>
            <FaIcons.FaPhone />   Emergency Call: +2348169466831
            </p>
            </div>
            </div>
        </main>
    </>
  )
}

export default Home