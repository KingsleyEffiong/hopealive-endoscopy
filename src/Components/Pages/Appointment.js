import React, {
  useState
} from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import './Appointment.css'

function Appointment() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
  
    //   message: 'Drop a Message',
    //   appointment: 'Your Full Name',
    //   birth_date: 'Your Birth Date',
    //   address:'Your Address',
    //   report:'Your Report'
  });
  
  const {
    name,
    email,
    phone,
    datetime_local,
    birth_date,
    address,
    report
} = formData;

const handleChange = (e) => {
    setFormData({ ...formData,
        [e.target.name]: e.target.value
    });
};


const handleSubmit = (e) => {
  e.preventDefault();

  // TODO: Add your Email.js configuration and service ID here
  const serviceID = 'service_1zhl2qp';
  const templateID = 'appointment_form';
  const userID = '5BAQ9E94aLjwu41KG';

  emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(() => {
          console.log('Email sent successfully!');
          setModalIsOpen(true);
          setFormData({
              name: '',
              email: '',
              phone: '',
              datetime:'',
              birth_date:'',
              address:'',
              report:'',
          });
      })
      .catch((error) => {
          console.error('Error sending email:', error);
      });
};
  return (
    <>
    <div className='appointment-container'>
        <div className='appointment'>
    <h1 className='heading-appointment'>Appointment Form </h1>
    <p className='content-appointment'>If you would love to schedule a meeting with Dr. Ekpo Edet. Please fill this Appointment form and we will message you as soon as possible with an email. </p>
    <hr/>

    <form  onSubmit = { handleSubmit}>
<span className='content'>
<label
        for = "user_name"
        name = ""
        id = "user_name" > Full Name </label> 
        <input type = "text"
        name = "name"
        value = {
            name
        }
        onChange = {
            handleChange
        }
        placeholder = "your Full Name"
        required/>
 </span>
 <span className='content'>
             
 <label
        for = "user_email"
        name = "user_email"
        id = "user_email" > Your Email </label> 
        <input type = "email"
        name = "email"
        value = {
            email
        }
        onChange = {
            handleChange
        }
        placeholder = "your Mail"
        required/>
</span>
<span className='content'>
                    
 <label
        for = "user_phone_number"
        name = "phone"
        id = "user_phone_number" > Phone Number </label> 
        <input type = "number"
        name = "phone"
        value = {
            phone
        }
        onChange = {
            handleChange
        }
        placeholder = "your Number"
        required/>
 </span>

    <span className='content'>
    <label
        for = "user_appointment"
        name = "datetime-local"
        id = "user_appointment" > Appointment </label> 
        <input type = "datetime-local"
        name = "datetime-local"
        value = {
            datetime_local
        }
        onChange = {
            handleChange
        }
        required/>
</span> 
 
 <span className='content'>
 <label
        for = "user_address"
        name = "address"
        id = "user_address" > Your Address </label> 
        <input type = "text"
        name = "address"
        value = {
          address
        }
        onChange = {
            handleChange
        }
        required placeholder='your address'/>
 </span >
 <span className='content'>
 <label
        for = "user_report"
        name = "report"
        id = "user_report" > Your Report </label> 
        <textarea cols='55' rows='5'
        name = "report"
        value = {
          report
        }
        onChange = {
            handleChange
        }
        required placeholder='type in your message'/>
 </span >
<span className='content'>
        <input className='button' type='submit' value='Send Appointment Form'/>
</span>
    </form>
          <Modal isOpen = {
            modalIsOpen
        }
        className = 'pop-up'
        onRequestClose = {
            () => setModalIsOpen(true)
        }
        contentLabel = "Email Sent Modal">
       
       <h2 className='email'> Email Sent </h2>
        Your message has been sent successfully! < br/>
        
        <button id = 'btn-2'
        onClick = {
            () => setModalIsOpen(false)
        } > Close </button> 
        </Modal>
    </div>
    </div>
    </>
    
  )
}

export default Appointment