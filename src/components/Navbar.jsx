import React from 'react'
import "../style/Navbar.css";

function Navbar() {
    return (
        <>
        <nav className="navbar">
        <ul className="nav-list">
            <li>LOGO</li>
            <li className="nav-item"><a href="#">Men</a>
                <ul className="dropdown">
                    <li><a href="#">Top Wear</a></li>
                    <li><a href="#">Bottom Wear</a></li>
                    <li><a href="#">Footwear</a></li>
                </ul>
            </li>
            <li className="nav-item"><a href="#">Women</a>
                <ul className="dropdown">
                    <li><a href="#">Top Wear</a></li>
                    <li><a href="#">Bottom Wear</a></li>
                    <li><a href="#">Footwear</a></li>
                </ul>
            </li>
            <li className="nav-item"><a href="#">Kids</a>
                <ul className="dropdown">
                    <li><a href="#">Top Wear</a></li>
                    <li><a href="#">Bottom Wear</a></li>
                    <li><a href="#">Footwear</a></li>
                </ul>
            </li>
            <li><input type="text" placeholder='Search'/></li>
        </ul>
    </nav>
        </>
    )
}
export default Navbar