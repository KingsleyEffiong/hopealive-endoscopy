import React from 'react'
import './Service.css'
import Footer from '../Footer'
function Service() {

  return (
    <>
    <div id='container'>
    <h1>Our Services</h1>


    <span className='service-content'>
We offer holistic Fertility, Endoscopy and Gygnaecological services to our valuable and esteemed patients and clients. Our range of services includes the following; 
    </span>
    <div className='content-container'>
    <span className='content-text'>
      <img src='/Images/fer.jpg'className='service-image'/>
    Fertility Services:<br/> Including In-Vitro Fertilization (IVF), Intrauterine Insemination (IUI), Embryo Freezing, Sperm Freezing, Follicular Monitoring and Donor Program.
    </span>
    <span className='content-text'>
    <img src='/Images/scan.jpg' className='service-image'/>
    Minimal Access Services: <br/>Including Laparoscopy, Hysteroscopy and Cystoscopy.
    </span>
    <span className='content-text'>
    <img src='/Images/laparoscopy-inline-46cf03.jpg'className='service-image'/>
    The Laparoscopy procedures covers: <br/> Diagnostic Laparoscopy and Dye test, Laparoscopic Myomectomy, Ovarian Cystectomy, Hysterectomy, Adhesiolysis, Tubal Surgeries, Ectopic Gestation, Tubal Ligation, Ovarian drilling, Endometrosis and Adenomyomectomy.
    </span>
    </div>

    <div className='content-container'>
    <span className='content-text'>
      <img width='300' height='300' src='/Images/OG04_Fig1.png'className='service-image'/>
      The Hysteroscopy Procedures covers:<br/>Diagnostic Hysteroscopy, Endometrial Biopsy, Hysteroscopic Polypectomy, Myomectomy, Adhesiolysis, Tubal Canulation, Septoplasty, Removal of Missing IUCD and Removal of retained product of conception.
    </span>
    <span className='content-text'>
    <img src='/Images/cystoscopy.jpg' className='service-image'/>
    The Cystoscopy Procedure covers: <br/>Diagnostic Cystoscopy.
    </span>
    <span className='content-text'>
    <img src='/Images/antenatal-care-848x518-1.jpg'className='service-image'/>
  	Antenatal Services: <br/> Including Antenatal care, Caesarean section (CS), Deliveries.
    </span>
    </div>

    <div className='content-container'>
    <span className='content-text'>
      <img width='300' height='300' src='/Images/167678769-unknown-male-doctor-and-patient-woman-discussing-something-while-sitting-in-clinic-and-using.jpg'className='service-image'/>
      <spam className='words'>
      Gynaecological Services :<br/>Including Open Myomectomy, Total Abdominal Hysterectomy, Ovarian Cystectomy, Vaginal Hysterectomy, Prolapse Surgery, Et cetera.
      </spam>
    </span>

    <span className='content-text'>
    <img src='/Images/Augmedics-Xvision_V4.00_01_14_12.Still002-scaled.jpg'className='service-image'/>
  	Oncological Surgeries : <br/> Including Ovarian cancers, Cervical and Endometrial Cancers.
    </span>
    </div>
    <Footer/>
        </div>

        </>
  )
}

export default Service