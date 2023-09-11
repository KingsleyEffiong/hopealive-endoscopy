import React from 'react'
import './Home.css'
import * as FaIcons from 'react-icons/fa';
import Map from '../Map';
import Footer from '../Footer';



function Home() {
  return (
    <>
        <header>
            <div className='header-container'>
            <h1> HopeAlive Endoscopy Clinic</h1>
            <h1> Medical Advices </h1>
            <div className='word'>
            <p>For more than a decade, people from the walks of life have found answers at  Hopealive Endoscopy & Fertility </p>
            </div>
            <button>
                <a href='tel:+2349161827769'><FaIcons.FaWhatsapp/>Have a Chat with Our Doctors </a>
            </button>
            </div>
        </header>
        <main>
            <div className='main-container'>
                <h1 className='main-heading'>Caring for the growing needs of our community</h1>
                <p className='main-text'>For maore than a decade, people all walks of life have found answers at Hopealive Endoscopy & Fertility Clinic located at the heart of the city, in addition a number of programs function outside the actual one. Here are some reasons why more than million people each year choose Hopealive Endoscopy & Fertility Clinc for medical container
                    
                    <ul>
                        <li>Experienced doctors in every specialty </li>
                        <li>Smplify a company's legal project management approach</li>
                        <li>Satisfied patients andan unpaalleled experience</li>
                    </ul>
                     </p>
            </div>
            <div className='main-container'>
        <h1 className='main-heading'>Working Hours</h1>
        <p className='box2'>
            Caring for patients, every day of the week
        </p>
        <table >
            <tr>
                <td>Monday to Friday</td>
                <td>7.00 to 24.00</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>9.00 to 24.00</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>9.00 to 24.00</td>
            </tr>
        </table>
            </div>
        </main>

        <main>
            <div className='main-container-2'>
             <h1>About Us</h1>
             <p  className='main-text'>
             HopeAlive Endoscopy and Fertility Clinic is a Multi-Gynaecology specialist facility, with well suited and convenient rooms. We offer an array of high quality and comprehensive gynaecological services across areas which include, In-Vitro Fertilization(IVF), Intrauterine Insemination(IUI), Sperm Freezing, Embryo Freezing, Follicular monitoring, Donor Program, Diagnostic and operative Laparoscopy, Hysteroscopy and Cystoscopy procedures, Antenatal services, Gynaecological services and Oncological services.
             </p>
           <div className='image-container'>
            <img width='300px' height='300px'  src='/Images/doctor212.jpg'></img>
            <button>
                <a href=''>Meet Our CMD</a>
            </button>
           </div>
            </div>
            <div className='main-container-2'>
                <img src='/Images/building.jpg'></img>
            </div>
        </main>
    <Map/>

<Footer/>
    </>
  )
}

export default Home