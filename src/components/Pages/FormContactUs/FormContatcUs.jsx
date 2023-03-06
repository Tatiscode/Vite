import React, {useRef} from 'react'
import './formContactUs.css'
import emailjs from 'emailjs/browser'

function FormContatcUs = () =>{

    consy refForm = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(refForm.current);
        const serviceId = "service_zcs60e9";
        const templadeId= "template_iivsf6s";
        const apiKey= "c5ORmDyFKFxHmi5Wt";

        emailjs.sendForm(serviceId, templadeId, refForm.current, apiKey)
        .then( result => console.log(result.text))
        .cach( error => console.error(error))
    }

  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>

    <div className="header-contact">
    <h2>Contact Kyle Cosmetics</h2>
    <p>Please fill this form</p>
    </div>
    <fieldset className='field-name'>
    <label className='symbol-required name' htmlFor="">Income you name</label>
    <input name='username' type="text" placeholder='Name' required/>
    </fieldset>
    <fieldset className='field-email'>
    <label className='symbol-required' name="email">Income you Email</label>
    <input name='email' type="email" placeholder='Email' id="email" required/>
    </fieldset>
    <fieldset className='field-message'>
    <label className='symbol-required'>Income you message</label>
    <textarea  maxLength="500" placeholder='Type yout message' name="message" id="" cols="30" rows="10"></textarea>
    </fieldset>
    
    <button className="btn-send">Send Info</button>
    </form>
  )
}

export default FormContatcUs