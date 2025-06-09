import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/competences.css';

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
              <li>JavaScript</li>
              <li>React.js</li>
              <li>C#</li>
              <li>Langage C</li>
              <li>Langage C++</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="competence-card">
            <h3>Développement Back-end</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>MongoDB</li>
            </ul>
          </div>
          
          <div className="competence-card">
            <h3>Outils</h3>
            <ul>
              <li>Git / GitLab / GitHub</li>
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
