import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact-option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>egator tutorials</h5>
            <a href="https://m.me/ernest.achiever" target="_blank">Send a Message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>What's App</h4>
            <h5>+123456789</h5>
            <a href="http://api.whatsapp.com/send?phone+123456789" target="_blank">Send a Message</a>
          </article>
        </div>
  {/*end of contact options */}
      
    <form action="">
      <input type ="text" name='name' placeholder='Your Full Name' required />
      <input type ="email" name='name' placeholder='Your Message' required />
      <textarea name="message" rows="7" placeholder='Your Message' required />
     <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact