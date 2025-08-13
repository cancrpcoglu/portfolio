import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home-hero">
            <div className="hero-content">
                <h1>Hi, I'm Can Çorapçıoğlu</h1>
                <p>Full-Stack & AI Developer</p>
                <p>
                    Passionate about building scalable software solutions and
                    solving complex problems with AI and automation.
                </p>
                <div className="hero-buttons">
                    <a href="/projects" className="btn btn-primary">
                        View Projects
                    </a>
                    <a href="/contact" className="btn btn-secondary">
                        Contact Me
                    </a>
                    <a href="/about" className="btn btn-secondary">
                        About Me
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
