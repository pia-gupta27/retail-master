"use client"
import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import styles from '@/app/ui/homepage/contact/contact.module.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p0r8gbc', 'template_9p6vbdq', form.current, 'LYSRaI_-bwyS5RQLQ')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact' className={styles.contact}>
      <h2 className={styles.h2}>Contact Us</h2>
      <h5 className={styles.h5}>Get In Touch</h5>

      <br />
      <br />

      <div className={styles.contact__container}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.contact__option_icon} />
            <h4 className={styles.h4}>Email</h4>
            <h5 className={styles.h5}>pia27gupta@gmail.com</h5>
            <a href='mailto:pia27gupta@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className={styles.contact__option}>
            <BsWhatsapp className={styles.contact__option_icon} />
            <h4 className={styles.h4}>Whatsapp</h4>
            <h5 className={styles.h5}>+91 9289378091</h5>
            <a href='https://api.whatsapp.com/send?phone=919289378091' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
