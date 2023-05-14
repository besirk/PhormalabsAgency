import './cta.css';
import SendIcon from '@mui/icons-material/Send';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField, TextareaAutosize } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';


const Cta = () => {
  const form = useRef();
  const captchaRef = useRef(null);
  const [isToken, setIsToken] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n4a0i1o', 'template_kvnvpjs', form.current, 'R4MJrfRVV1D9F2SiP')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
  };

  const onChange = (token) => {
    if (typeof token === 'string' && token.length > 0) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  };

  return (
    <div className="contact_section">
      <div className="phormalabs__cta" id="contact">
        <h2>What are you waiting for?</h2>
        <p>Turn your crazy ideas into the best business model!</p>
        <h2 className="emailll">Contact@phormalabs.com</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact_form">
        <TextField id="email" name="email" label="Email" variant="outlined" />
        <TextField id="from_name" name="from_name" label="Name" variant="outlined" />
        <TextareaAutosize
          aria-label="empty textarea"
          minRows={3}
          placeholder="Please enter your message here"
          name="message"
        />
        {isToken ? (<Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Send
        </Button>) : ""}
        <ReCAPTCHA sitekey="6LfUsgsmAAAAAL6bxbekILlum3e1pqeqahuCA2x_" ref={captchaRef} onChange={onChange} />
      </form>
    </div>
  );
};

export default Cta;
