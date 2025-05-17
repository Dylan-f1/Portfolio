import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Competences.css';

const Competences = () => {
  return (
    <div>
      <Navbar />
      <section id="competences" className="competences-section">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="competences-container">
          <div className="competence-card">
            <h3>Développement Front-end</h3>
            <ul>
              <li>HTML5 / CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="competence-card">
            <h3>Développement Back-end</h3>
            <ul>
              <li>Node.js</li>
              <li>PHP</li>
              <li>SQL / Bases de données</li>
              <li>API REST</li>
            </ul>
          </div>
          
          <div className="competence-card">
            <h3>Outils & Méthodologies</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Méthodologie Agile</li>
              <li>Tests unitaires</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;
