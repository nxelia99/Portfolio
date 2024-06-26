import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b7pcbha', 'template_6wad6wq', form.current, 'xYW3NstznYrhhcg5K')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return(
        <section className="contact-section"id="Contact">
            <h2 className="section_title purple">Contact <i className='bx bxs-contact purple'></i></h2>
            <span className="section_subtitle">Get in touch</span>
            <div className="contact_container grid">
                <div className="contact_content">
                    <div className="contact_info">
                        <div className="container-contact">
                            <div className="contact_content mb-3">
                                <h3 className="contact_title purple">Talk to me</h3>
                                <div className="contact_card">
                                    <div className="header-card">
                                        <i className='bx bx-mail-send'></i>
                                        <h3 className="contact_card-title">Email</h3>
                                    </div>
                                    <span className="contact_card-data">nxelia99@gmail.com</span>
                                    <a href="mailto:nxelia99@gmail.com" className="contact_button purple">Write me<i className='bx bx-right-arrow-alt contact_button-icon purple'></i></a>
                                </div>
                                <div className="contact_card">
                                    <div className="header-card">
                                        <i className='bx bxl-linkedin-square'></i>
                                        <h3 className="contact_card-title">LinkedIn</h3>
                                    </div>
                                    <span className="contact_card-data">Noelia Fernández López</span>
                                    <a href="https://www.linkedin.com/in/noelia-fern%C3%A1ndez-l%C3%B3pez-659818215" target="_blank" className="contact_button purple">Write me<i className='bx bx-right-arrow-alt contact_button-icon purple'></i></a>
                                </div>
                                </div>
                            <div className="contact_content">
                                <h3 className="contact_title">Message:</h3>
                                <form ref={form} onSubmit={sendEmail} className="contact_form">
                                    <div className="contact_form-div">
                                        <label className="contact_form-tag">Name</label>
                                        <input type="name" className="form-control" placeholder="Name" name ="name" required/>
                                        <div className="mb-3">
                                            <label className="form-label">Email
                                                address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                                   placeholder="Insert your email" name="email" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1"
                                                      rows="3" placeholder="Describe your project" name="message" required></textarea>
                                        </div>
                                        <button className="send download">Send Message<i className='bx bx-envelope purple'></i></button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
          </div>

        </section>
    )

}