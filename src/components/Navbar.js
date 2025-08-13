import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black text-white flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="text-lg font-bold">Can Çorapçıoğlu</div>

            {/* Menü öğeleri - sadece md ve üstü */}
            <div className="hidden md:flex space-x-6">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            {/* Hamburger ikonu - her zaman görünür */}
            <button className="md:hidden" onClick={toggleMenu}>
                ☰
            </button>

            {/* Mobil menü - sadece açıkken görünür */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden">
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#about" onClick={toggleMenu}>About</a>
                    <a href="#projects" onClick={toggleMenu}>Projects</a>
                    <a href="#contact" onClick={toggleMenu}>Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
