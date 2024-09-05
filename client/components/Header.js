import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
  return (
    <header>
      <h1 style={{color:'white'}}>STUDENT MANAGEMENT SYSTEM</h1>
      <nav>
              <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/registration">Registration</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
