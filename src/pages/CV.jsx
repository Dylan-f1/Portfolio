import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/CV.css';

const CV = () => {
  return (
    <div>
      <Navbar />
      <section className="cv-section">
        <h2 className="section-title">Mon CV</h2>
        <div className="cv-container">
          <div className="cv-image-container">
            <img 
              src="/CV-Dylan-Fernandes.png" 
              alt="CV de Dylan Fernandes" 
              className="cv-image" 
            />
          </div>
          <div className="cv-download">
            <a 
              href="/CV-Dylan-Fernandes.pdf" 
              download
              className="download-button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{verticalAlign:'middle',marginRight:'8px'}}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger le CV (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
