import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://res.cloudinary.com/dz7osr4ia/image/upload/v1720351779/post-3-logo-png-transparent_k0pexa.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="profile">
        <img src="https://res.cloudinary.com/dz7osr4ia/image/upload/v1720351910/78-786293_1240-x-1240-0-avatar-profile-icon-png_d4hlrp.png" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
