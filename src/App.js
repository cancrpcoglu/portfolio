import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Navbar from "./components/Navbar";

const sectionStyle = { paddingTop: "50px" };
function App() {
    return (
        <>
            <Navbar />
            <div id="home" style={sectionStyle}><Home /></div>
            <div id="about" style={sectionStyle}><About /></div>
            <div id="projects" style={sectionStyle}><Projects /></div>
            <div id="contact" style={sectionStyle}><Contacts /></div>
        </>
    );
}

export default App;
