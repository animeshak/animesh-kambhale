import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {
  const form = useRef();  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_idi0giy', 'template_p7f72ll', form.current, 'XL83pgNfs0CmCF1fF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className='start'>
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>animeshkambhale2001@gmail.com</h5>
              <a href="mailto:animeshkambhale2001@gmail.com" target='_blank'>Send a Message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+91 9145257030</h5>
              <a href="https://api.whatsapp.com/send?phone+919145257030" target='_blank'>Send a Message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Meassage' required></textarea>
            <button type='submit' className='btn btn-primary'>  Send Message</button>
          </form>
        </div>
    </section>
    </div>
  )
}