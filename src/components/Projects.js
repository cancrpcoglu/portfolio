import React from 'react';

function Projects(){
    const projectList = [
        {
            title: "LSTM/GRU/RNN Price Prediction",
            description: "Compared LSTM, GRU, and RNN models using Tesla Stock Price's TSLA.csv.",
            tech: "Python, TensorFlow, Keras, Pandas, NumPy",
            github: "https://github.com/cancrpcoglu"
        },
        {
            title: "Receipt Scanning with OCR",
            description: "Expense analysis system extracting data from receipts using PyTesseract.",
            tech: "Python, TesseractOCR, Flask, Pandas, React",
            github: "https://github.com/cancrpcoglu/ocr-reciept-scanning"
        },
        {
            title: "Image Classification with CNN",
            description: "CNN model trained on PASCAL VOC 2012 dataset.",
            tech: "Python, TensorFlow, OpenCV",
            github: "https://github.com/can/pascalvoc-cnn"
        }
    ];

    return (
        <div style={{ padding: 20 }}>
            <h1>Projects</h1>
            {projectList.map((proj, index) => (
                <div key={index} style={{ marginBottom: 20, padding: 15, border: '1px solid #ccc', borderRadius: 8 }}>
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                    <p><strong>Technologies:</strong> {proj.tech}</p>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
