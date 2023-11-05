import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/certifications">Certifications</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
  );
};

export default Navbar;
