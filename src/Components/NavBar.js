import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../Styles/NavBar.css';

export const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="../Images/Growmore-logo-1.png" alt="Logo" />
                </Link>
            </div>
            <div className={`navbar-items ${isMobile ? 'active' : ''}`}>
                <li className="navbar-item"><Link to="/" onClick={handleToggle}>Home</Link></li>
                <li className="navbar-item"><Link to="/about" onClick={handleToggle}>About</Link></li>
                <li className="navbar-item"><Link to="/contacts" onClick={handleToggle}>Contacts</Link></li>
            </div>
            <div className="mobile-menu-icon" onClick={handleToggle}>
                <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
            </div>
        </nav>
    );
};
