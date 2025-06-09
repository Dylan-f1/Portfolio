import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Entreprise.css';

const Entreprise = () => {
    return (
        <div>
            <Navbar />
            <section className="contact-section">
                <h2>Mes Expériences en Entreprise</h2>
                
                <div className="entreprise-container">
                    {/* Section d'introduction */}
                    <div className="intro-section">
                        <h3>Mon Parcours Professionnel</h3>
                        <p>
                            Durant ma formation en BTS SIO (Services Informatiques aux Organisations), 
                            j'ai eu l'opportunité de découvrir le monde professionnel à travers un 
                            stage et expériences en entreprise. Ces expériences m'ont permis de développer 
                            mes compétences techniques, d'acquérir une meilleure compréhension du secteur 
                            informatique et de m'adapter aux exigences du monde du travail.
                        </p>
                    </div>

                    {/* Grille des expériences */}
                    <div className="experiences-grid">
                        <div className="experience-card">
                            <div className="experience-header">
                                <h4 className="company-name">Quevyn Rohel EI</h4>
                                <h5 className="position-title">Stagiaire en Développement Web, Mobile, Jeux et Logiciel</h5>
                                <p className="duration">Avril 2025 - Juillet 2025 (2 mois)</p>
                                <p className="location">Paris, France</p>
                            </div>
                            <div className="experience-description">
                                <p>
                                    Voici la description de votre première expérience en entreprise. 
                                    Détaillez les missions accomplies, les projets sur lesquels vous avez travaillé, 
                                    et les responsabilités qui vous ont été confiées.
                                </p>
                            </div>
                            <div className="skills-section">
                                <h5>Compétences développées :</h5>
                                <div className="skills-list">
                                    <span className="skill-tag">HTML/CSS</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">React</span>
                                    <span className="skill-tag">Git</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section des accomplissements */}
                    <div className="accomplishments-section">
                        <h3>Accomplissements & Réalisations</h3>
                        
                        <div className="accomplishment-item">
                            <h4>Développement d'un site web</h4>
                            <p>
                                Participation de la création d'un site web pour une école d'art.
                            </p>
                        </div>

                        <div className="accomplishment-item">
                            <h4>Développement des compétences</h4>
                            <p>
                                J'ai pu développer mes compétences en HTML/CSS, JavaScript.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Entreprise;