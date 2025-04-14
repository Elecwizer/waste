import React from 'react';
import CITEthonLogo from '../images/CITEthonLogo.png'
import '../styles/navbar.css';
//import end

function Navbar() {
  return (
    <nav class="navbar">
      <img src={CITEthonLogo} alt="Citethon Logo" />
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Smart Bins</a></li>
        <li><a href='/'>Core Values</a></li>
        <li><a href='/'>Join Us</a></li>
        <li><a href='/'>Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;