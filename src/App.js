import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./components/Contacs.css"
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThankYou from "./components/ThankYou";

const sectionStyle = { paddingTop: "5px" };

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Ana sayfa */}
                <Route
                    path="/"
                    element={
                        <>
                            <div id="home" style={sectionStyle}><Home /></div>
                            <div id="about" style={sectionStyle}><About /></div>
                            <div id="projects" style={sectionStyle}><Projects /></div>
                            <div id="contact" style={sectionStyle}><Contacts /></div>
                        </>
                    }
                />
                {/* Teşekkür sayfası */}
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
        </Router>
    );
}

export default App;
