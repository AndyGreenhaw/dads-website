import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/css.css'; // Ensure your CSS file is here

const ContactForm = ({closeModal}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your EmailJS parameters
        const serviceId = 'YOUR_SERVICE_ID';
        const templateId = 'YOUR_TEMPLATE_ID';
        const userId = 'YOUR_USER_ID';

        emailjs.send(serviceId, templateId, formData, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    return (
        <div className="modal-overlay">
            <div className="contact-form">
                <div className="contact-form-header">
                    <span>Send Me a Message</span>
                    <button className="close-button" onClick={closeModal}>×</button>
                </div>
                <div className="contact-form-instructions">
                    If you like what you see, send me a message with your idea, and I'll let you know what I can do.
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="col-12">
                        <input
                            type="text"
                            name="name"
                            className="input-name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="col-12">
                        <input
                            type="email"
                            name="email"
                            className="input-email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="col-12">
                        <textarea
                            name="message"
                            className="input-message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                        />
                    </div>
                    <div className="submit-button-container">
                        <button type="submit" className="submit-button">Send</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;
