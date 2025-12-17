import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      
      {/* Hero Section avec photo + présentation */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Partie gauche - Photo + Infos */}
          <div className="hero-left">
            <div className="profile-card">
              <div className="profile-image">
                <img src="/profile-photo.png" alt="Dylan Fernandes" />
              </div>
              <div className="profile-info">
                <span className="profile-badge">Apprenti BTS SIO</span>
                <h1 className="profile-name">Dylan Fernandes</h1>
                <p className="profile-role">Étudiant en BTS SIO à Lyon chez Nexa Digital School, Apprenti chez Tec6</p>
              </div>
            </div>
          </div>

          {/* Partie droite - Social Links */}
          <div className="hero-right">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/dylan-fer"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Dylan-f1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sections principales */}
      <section className="main-sections">
        <div className="sections-container">
          {/* Carte Sur Moi */}
          <Link to="/competences" className="section-card about-card">
            <div className="card-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="card-content">
              <span className="card-label">EN SAVOIR PLUS</span>
              <h2 className="card-title">Sur moi</h2>
            </div>
            <div className="card-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </Link>

          {/* Carte Mes Projets */}
          <Link to="/projets" className="section-card projects-card">
            <div className="card-preview">
              <div className="preview-item">MY WORKS</div>
            </div>
            <div className="card-content">
              <span className="card-label">DÉCOUVRIR</span>
              <h2 className="card-title">Mes Projets</h2>
            </div>
            <div className="card-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Section Entreprise + Veille */}
      <section className="bottom-sections">
        <div className="bottom-container">
          <Link to="/entreprise" className="bottom-card enterprise-card">
          <div className="card-preview">
              <div className="preview-item">Sylnux</div>
            </div>
            <div className="card-content">
              <span className="card-label">EN SAVOIR PLUS SUR</span>
              <h2 className="card-title">Mon Entreprise</h2>
            </div>
            <div className="card-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </Link>

          {/* Veille Techno */}
          <Link to="/veille-techno" className="bottom-card veille-card">
            <div className="card-icon-small">📚</div>
            <div className="card-content">
              <span className="card-label">VEILLE</span>
              <h2 className="card-title">Technologique</h2>
            </div>
            <div className="card-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </Link>

          {/* Mes Réseaux */}
          <div className="bottom-card networks-card">
            <div className="card-content">
              <span className="card-label">RESTONS EN CONTACT</span>
              <h2 className="card-title">Mes Réseaux</h2>
            </div>
            <div className="networks-icons">
              <a href="https://www.linkedin.com/in/dylan-fer" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/Dylan-f1" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;