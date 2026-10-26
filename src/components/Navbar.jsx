import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BoutonFond from './BoutonFond';
import '../styles/Navbar.css';

const liens = [
  { to: '/a-propos', label: 'À propos' },
  { to: '/entreprise', label: 'Entreprise' },
  { to: '/projets', label: 'Projets' },
  { to: '/cv', label: 'Mon CV' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const barre = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Menu mobile : se ferme avec Échap ou en touchant ailleurs
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    const onPointer = (event) => {
      if (barre.current && !barre.current.contains(event.target)) setIsMenuOpen(false);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar" ref={barre}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu} aria-label="Dylan Fernandes, accueil">
          <span className="navbar-logo-slash" aria-hidden="true" />DF
        </Link>

        <div className="navbar-right">
          <nav id="navbar-links" className={`navbar-links ${isMenuOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
            {liens.map((lien) => (
              <NavLink key={lien.to} to={lien.to} className="navbar-link" onClick={closeMenu}>
                {lien.label}
              </NavLink>
            ))}
          </nav>

          <BoutonFond />

          <button
            type="button"
            className="navbar-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="navbar-links"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggle-bars" aria-hidden="true" />
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
