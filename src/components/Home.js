import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import myPhoto from "../assets/myPhoto.jpg";

function Home() {
    return (
        <>
            <Helmet>
                <title>Can Çorapçıoğlu | Home</title>
            </Helmet>

            <div className="home-hero">
                <div className="hero-left">
                    <img src={myPhoto} alt="Can Çorapçıoğlu" className="hero-photo" />
                </div>
                <div className="hero-right">
                    <h1>Hi, I'm Can Çorapçıoğlu</h1>
                    <p className="hero-subtitle">AI Engineer & Backend-Frontend Developer</p>
                    <p className="hero-description">
                        Specialized in developing AI-driven solutions for time-series forecasting,
                        image classification, and computer vision. Experienced in building scalable
                        backend systems with Python, automation, and API integrations,
                        complemented by frontend skills in React, JavaScript, HTML, and CSS.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#about" className="btn btn-secondary">About Me</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
