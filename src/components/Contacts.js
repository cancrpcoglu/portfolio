import React, { useState } from "react";
import "./Contacs.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaPhone } from "react-icons/fa";
import cancv from "../assets/Can ÇORAPÇIOĞLU Eng G.pdf";
import emailjs from "@emailjs/browser";

function Contacts() {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_35ege3g",
            "template_w9nfc5h",
            formData,
            "tst_7311B16W_H5vu"
        ).then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            setShowMessage(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setShowMessage(false), 3000);
        }, (err) => {
            console.log("FAILED...", err);
            alert("Message could not be sent. Please try again later.");
        });
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p>If you want to get in touch, feel free to reach out via email, phone, or social media.</p>

            <div className="contact-icons">
                <a href="https://github.com/cancrpcoglu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/can-%C3%A7orap%C3%A7%C4%B1o%C4%9Flu-15a340247/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:cancorapcioglu1@gmail.com"><FaEnvelope /></a>
                <a href="tel:+905398796000"><FaPhone /></a>
                <a href={cancv} target="_blank" rel="noopener noreferrer"><FaFileAlt /></a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>

            {showMessage && <div className="message-bubble">Message Sent!</div>}
        </section>
    );
}

export default Contacts;
