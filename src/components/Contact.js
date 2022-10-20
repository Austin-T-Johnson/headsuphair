import React from 'react'
import Form from './Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact-section-container' id='contact'>
                <div className='contact-us'>Contact Us</div>
                <div className='call-txt'>Call now to make an appointment</div>
                <div className='phone-number'>
                    <FontAwesomeIcon className='phone-icon' icon={faPhone} /> (760) 325-4247
                </div>
                <div className='send-message-txt'>Or send us a message &#8595;</div>
                <div className='form-container'>
                    <Form />
                </div>
                <div className='form-btn'><button>Send</button></div>
            </div>

  )
}

export default Contact