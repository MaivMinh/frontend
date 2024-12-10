import React from "react";
import { useAppContext } from "../AppContext";

const Header = () => {
    const { isAuthenticated } = useAppContext();
    return (
        <header className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
            {/* TMDB Logo */}
            <div className="text-2xl font-bold flex items-center">
                <a href="/" className="text-cyan-400">MOOK</a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-cyan-400">
                Movies
            </a>
            <a href="#" className="hover:text-cyan-400">
                Books
            </a>
            <a href="#" className="hover:text-cyan-400">
                About
            </a>
            <a href="#" className="hover:text-cyan-400">
                More
            </a>
            </nav>

            {/* Language Selector and Login */}
            <div className="flex items-center space-x-4">
            
            {isAuthenticated ? (
                <button className="hover:text-cyan-400">Profile</button>
            ) : <button className="hover:text-cyan-400">Login</button>}
            </div>
        </div>
        </header>
    );
};

export default Header;
