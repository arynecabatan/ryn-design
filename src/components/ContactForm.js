import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import MaskedText from '../components/MaskedText';
import {Colors} from './Variables';
import styled from "styled-components";

import { TbSend } from "react-icons/tb";

const ContactSection = styled.section`
  width: 100%;
  max-width: 480px;
`;


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let message = e.target.message.value;
    let name = e.target.name.value;
    let email = e.target.email.value;

    if (message.length > 10 || name.length > 2 || email > 5) {

      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);        
          toast.success("Message Sent");
      }, (error) => {
          toast.error(error.text);
      });
      e.target.reset();
    } else {
      toast.error('Message is short');
    }
  };

  return (
    <ContactSection>
      <h2>
        <MaskedText initialColor={Colors.sizzlingred} finalColor={Colors.tartorange}>Contact me</MaskedText>
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name*</label>
          <input title=" " type="text" name="name" id="name" placeholder="Name" required/>
        </div>
        <div>
          <label htmlFor="name">Email*</label>
          <input title=" " type="email" name="email" id="email" placeholder="Email" required/>
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input title=" " type="text" name="subject" id="subject" placeholder="Subject (Optional)"/>
        </div>
        <div>
          <label htmlFor="message">Message*</label>
          <textarea title=" " name="message" id="message" rows="8" placeholder="Message" required/>
        </div>
        <button type="submit"><TbSend/> Send</button>
      </form>
    </ContactSection>
  );
};

export default ContactForm;

/**
 */