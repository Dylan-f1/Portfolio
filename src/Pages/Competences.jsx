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
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="competence-card">
            <h3>Développement Back-end</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>Django</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          
          <div className="competence-card">
            <h3>Outils</h3>
            <ul>
              <li>GitLab</li>
              <li>GitHub</li>
              <li>Cursor / VSCode</li>
              <li>Figma</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competences;
