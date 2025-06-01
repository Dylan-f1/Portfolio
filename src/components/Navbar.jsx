import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navigation-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>DF</Link>
        </div>
        
        {/* Menu hamburger */}
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation desktop */}
        <nav className="navigation">
          <Link to="/competences" className="nav-link">
            COMPÉTENCES
          </Link>
          <Link to="/cv" className="nav-link">
            CV
          </Link>
          <Link to="/projets" className="nav-link">
            PROJETS
          </Link>
          <Link to="/entreprise" className="nav-link">
            ENTREPRISE
          </Link>
          <Link to="/vielle-techno" className="nav-link">
            TECHNOLOGIE
          </Link>
          <Link to="/a-propos" className="nav-link">
            À PROPOS
          </Link>
        </nav>

        {/* Navigation mobile */}
        <nav className={`navigation mobile ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/competences" className="nav-link" onClick={closeMenu}>
            COMPÉTENCES
          </Link>
          <Link to="/cv" className="nav-link" onClick={closeMenu}>
            CV
          </Link>
          <Link to="/projets" className="nav-link" onClick={closeMenu}>
            PROJETS
          </Link>
          <Link to="/entreprise" className="nav-link" onClick={closeMenu}>
            ENTREPRISE
          </Link>
          <Link to="/vielle-techno" className="nav-link" onClick={closeMenu}>
            TECHNOLOGIE
          </Link>
          <Link to="/a-propos" className="nav-link" onClick={closeMenu}>
            À PROPOS
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar; 