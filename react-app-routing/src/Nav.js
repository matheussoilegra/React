import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
  };

  return (
    <nav className="nav">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/home" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/movie" style={navStyle}>
          <li>Movies</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
