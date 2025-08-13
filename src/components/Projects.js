import React from 'react';
import './Projects.css';
import pythonIcon from "../assets/python.png";
import tensorflowIcon from "../assets/tensorflow.png";
import kerasIcon from "../assets/keras.png";
import pandasIcon from "../assets/pandas2.png";
import numpyIcon from "../assets/numpy.png";
import reactIcon from "../assets/react.png";
import flaskIcon from "../assets/flask.png";
import tesseractIcon from "../assets/tesseract.png";
import opencvIcon from "../assets/opencv.png";
import cssIcon from "../assets/css.png";
import cnnIcon from "../assets/cnn.png";
import aiIcon from "../assets/ai.jpg";
import mlIcon from "../assets/machinelearning.jpg";
import njsIcon from "../assets/nodejs.png";
import jsIcon from "../assets/js.jpeg";
import htmlIcon from "../assets/html.png";
import androidIcon from "../assets/android.png";

const techIcons = {
    Python: pythonIcon,
    TensorFlow: tensorflowIcon,
    Keras: kerasIcon,
    Pandas: pandasIcon,
    NumPy: numpyIcon,
    React: reactIcon,
    Flask: flaskIcon,
    TesseractOCR: tesseractIcon,
    OpenCV: opencvIcon,
    CSS: cssIcon,
    CNN: cnnIcon,
    AI: aiIcon,
    ML: mlIcon,
    NodeJS: njsIcon,
    JS: jsIcon,
    HTML: htmlIcon,
    Android: androidIcon
};

const projectList = [
    {
        title: "LSTM/GRU/RNN Price Prediction",
        description: "Developed and compared deep learning models (LSTM, GRU, RNN) to forecast Tesla stock prices, optimizing hyperparameters and preventing overfitting with early stopping techniques.",
        tech: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy","ML","AI","OpenCV","CNN"],
        github: "https://github.com/cancrpcoglu"
    },
    {
        title: "Receipt Scanning with OCR",
        description: "Developed a mobile-to-web expense tracking system where receipt images captured on mobile devices are processed via PyTesseract and OpenCV. Extracted vendor, date, time, and total amount, then transmitted the data to a web platform for storing expense notes and tracking spending history.",
        tech: ["Python", "TesseractOCR", "Flask", "Pandas", "React","CSS","CNN","JS","HTML","NodeJS","Android"],
        github: "https://github.com/cancrpcoglu/ocr-reciept-scanning"
    },
    {
        title: "Image Classification with CNN",
        description: "Created a local, web-based image classification platform using a CNN trained on the PASCAL VOC 2012 dataset. Users can upload images to receive classification results with confidence scores, displayed in a clean and interactive web interface.",
        tech: ["Python", "TensorFlow", "OpenCV","CSS","AI","ML","CNN"],
        github: "https://github.com/cancrpcoglu/cnn-image-prediction"
    },
    {
        title: "Personal Website",
        description: "Developed a responsive and interactive portfolio website using React, JavaScript, HTML, and CSS to showcase projects and technical expertise.",
        tech: ["React","JS","CSS","HTML","NodeJS"],
        github: "https://github.com/cancrpcoglu/portfolio"
    }
];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projectList.map((proj, index) => (
                    <div className="project-card" key={index}>
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        <div className="tech-icons">
                            {proj.tech.map((tech, i) => (
                                techIcons[tech] && (
                                    <img
                                        key={i}
                                        src={techIcons[tech]}
                                        alt={tech}
                                        title={tech}
                                        className="tech-icon"
                                    />
                                )
                            ))}
                        </div>
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-link">
                            GitHub Link
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
