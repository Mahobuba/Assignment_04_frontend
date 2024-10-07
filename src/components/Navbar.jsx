import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar = ({ user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="https://live.staticflickr.com/65535/52413593240_e00326e727_o.png" alt="Logo" className="logo" />
                <Link to="/" className="navbar-title">Bootcamp Book Shop</Link>
            </div>

            {/* Hamburger Icon for Small Devices */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Navbar Links */}
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/products" className="nav-item">Products</Link>
                {user ? (
                    <div className="navbar-user">
                        <img src={user.photoURL} alt="User" className="user-avatar" />
                        <span>{user.displayName}</span>
                        <button className="logout-button" onClick={() => signOut(auth)}>Logout</button>
                    </div>
                ) : (
                    <Link to="/login" className="nav-item">Login/Register</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
