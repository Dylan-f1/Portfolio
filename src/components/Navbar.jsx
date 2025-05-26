import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      
      <div className="navigation-container">
        <div className="logo">
          <Link to="/">DF</Link>
        </div>
        <nav className="navigation">
          <Link to="/competences" className="nav-link">
            COMPÉTENCES
          </Link>
          <Link to="/cv" className="nav-link">
            CV
          </Link>
          <Link to="/projets" className="nav-link">
            PROJETS PERSONNELS
          </Link>
          <Link to="/vielle-techno" className="nav-link">
            VIEILLE TECHNOLOGIE
          </Link>
          <Link to="/a-propos" className="nav-link">
            A PROPOS
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar; 