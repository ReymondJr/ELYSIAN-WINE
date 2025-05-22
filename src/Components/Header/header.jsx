import React from "react";
import Hero from '../Hero/hero';
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            {/* Menú normal solo en desktop */}
            <nav className="desktop-menu">
                <ul>
                    <li><a>ELYSIAN WINE</a></li>
                   
                </ul>
            </nav>
            <div className="header-separator"></div>
            <Hero />
        </header>
    );
}