import React from 'react'
import './Home.css'
import * as FaIcons from 'react-icons/fa';


function Home() {
  return (
    <>
        <header>
            <div className='header-container'>
            <h1> Medical Advices </h1>
            <p>For more than a decade, people from the walks of life have found answers at  Hopealive Endoscopy & Fertility </p>
            <button>
                <a href='tel:+2349161827769'><FaIcons.FaWhatsapp/>Have a Chat with Our Doctors </a>
            </button>
            </div>
        </header>
        <main>
            <div className='main-container'>
                <h1>Caring for the growing needs of our community</h1>
                <p className='main-text'>For maore than a decade, people all walks of life have found answers at Hopealive Endoscopy & Fertility Clinic located at the heart of the city, in addition a number of programs function outside the actual one. Here are some reasons why more than million people each year choose Hopealive Endoscopy & Fertility Clinc for medical container
                    
                    <ul>
                        <li>Experienced doctors in every specialty </li>
                        <li>Smplify a company's legal project management approach</li>
                        <li>Satisfied patients andan unpaalleled experience</li>
                    </ul>
                     </p>
            </div>
            <div className='main-container'>

            </div>
        </main>

    </>
  )
}

export default Home