// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Today's Sales</Link>
        </li>
        <li>
          <Link to="/comparison">Sales Comparison</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
