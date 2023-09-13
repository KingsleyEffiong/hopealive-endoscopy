import React from 'react'
import './Appointment.css'

function Appointment() {
  return (
    <>
    <div className='appointment-container'>
        <div className='appointment'>
    <h1 className='heading-appointment'>Appointment Form </h1>
    <p className='content-appointment'>If you would love to schedule a meeting with Dr. Ekpo Edet. Please fill this Appointment form and we will message you as soon as possible with an email. </p>
    <hr/>

    <form action='mailto:kingsleyeffiong642@gmail.com' method='post' autoComplete='off' className='form' enctype='text/plain'>
<span className='content'>
            <label  for='Name' name='firstName'> Full Name </label>
            <input type='text' name='firstName' placeholder='John Smith'/>
 </span>
 <span className='content'>
            <label  for='telNo' name='telNo'> Phone Number </label>
            <input id="telNo" name="telNo" type="tel" required placeholder='0813422323'/>
</span>
<span className='content'>
            <label  for='email' name='email'> Email Address </label>
            <input id="email" name="email" type="email" required placeholder='john@gmail.com' />
 </span>

    <span className='content'>
            <label  for='Date' name='appointment-date'>Appointment Date</label>
          <input type='date' name='appointment-date' className='date'/>
</span> 
 
 <span className='content'>     
            <label  for='Date' name='appointment-time'>Appointment Time</label>
            <input type='time' name='appointment-time'/>
 </span>    
<span className='content'>
            <label  for='Date' name='dateofbirth'>Date of Birth</label>
            <input type='date' name='dateofbirth'/>
 </span>
<span className='content'>     
             <label  for='file' name='file'>File</label>
            <input type='file' name='file'/>
 </span>   
 <span className='content'>
    <label for='address' name='address'>Address</label>
    <input type='address' name='address'></input>
 </span >
<span className='content'>
        <input className='button' type='submit' value='Send Appointment Form'/>
</span>
    </form>
    </div>
    </div>
    </>
    
  )
}

export default Appointment