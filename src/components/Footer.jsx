import React from 'react';
import { IconLinkedIn, IconGitHub } from './Icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="lv-wrap site-footer-inner">
        <p className="site-footer-text">
          <span>Restons en contact</span>
          <strong>Mes Réseaux</strong>
        </p>
        <div className="site-footer-links">
          <a href="mailto:dylan.fernandes.travail@gmail.com" className="lv-btn site-footer-mail">
            dylan.fernandes.travail@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/dylan-fer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconLinkedIn size={26} />
          </a>
          <a href="https://github.com/Dylan-f1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconGitHub size={26} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
