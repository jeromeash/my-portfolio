import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';




const Contact = () => {
    const form = useRef();
    const sendEmail =(e) =>{
        e.preventdefault();

        emailjs.sendForm('service_llfefbj','template_r5ms69d', form.current, '-gybNx0ySPCRWwS17')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('email sent !')
        }, (error)=>{
            console.log(error.text);
        
        });

    };
  return (
    <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>
                    i have had rhe opportunity to work with a diverse group of companies. some of the notable companiesi have worked with include.
                </p>
                <div className='clientImgs'>
                    <img src={Walmart} alt='' className='clientImg'/>
                    <img src={Adobe } alt='' className='clientImg'/>
                    <img src={Microsoft} alt='' className='clientImg'/>
                    <img src={Facebook} alt='' className='clientImg'/>
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunity.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name'placeholder='Your Name' name='your_name'/>
                    <input type='email' className='email'placeholder='Your Email'  name='your_email'/>
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className='Links'>
                         <img src={FacebookIcon} alt='Facebook!' className='Link'/>
                         <img src={Twitter} alt='Twitter' className='Link'/>
                         <img src={Youtube} alt='Youtube' className='Link'/>
                         <img src={Instagram} alt='Instagram' className='Link'/>
                    </div>
                   
                </form>
            </div>
    </section>

  )
}

export default Contact