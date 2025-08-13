import React from "react";
import "./About.css";

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2>About Me</h2>
                <p className="about-description">
                    Hi, I'm Can Çorapçıoğlu, an AI Engineer and Backend Developer with a strong foundation in Python-based automation, machine learning, and computer vision. I focus on developing AI-driven solutions for time-series forecasting, image classification, and OCR-based data extraction, while also working on scalable backend systems and API integrations for real-world applications.
                </p>
                <p className="about-description">
                    With additional experience in frontend technologies such as React, JavaScript, HTML, and CSS, I can contribute to end-to-end solutions from concept to deployment. I am passionate about clean architecture, performance optimization, and writing well-documented, maintainable code. Continuously learning and exploring new technologies, I aim to create innovative, efficient, and impactful software solutions.
                </p>
                <div className="about-buttons">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default About;
