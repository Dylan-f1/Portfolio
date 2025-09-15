import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/entreprise.css';

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
                            informatique.
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
                                    J'ai développé un site web pour une école d'art.
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
                        <div className="experience-card">
                            <div className="experience-header">
                                <h4 className="company-name">Sylnux</h4>
                                <h5 className="position-title">Stagiaire en Développement Web, Mobile, Jeux et Logiciel</h5>
                                <p className="duration">Août 2025 - Août2025 (1 mois)</p>
                                <p className="location">Lyon, France</p>
                            </div>
                            <div className="experience-description">
                                <p>
                                    J'ai développé un drawer pour une entreprise de cosmétique.
                                </p>
                            </div>
                            <div className="skills-section">
                                <h5>Compétences développées :</h5>
                                <div className="skills-list">
                                    <span className="skill-tag">Python</span>
                                    <span className="skill-tag">Bootstrap</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">React</span>
                                    <span className="skill-tag">Django</span>
                                </div>
                            </div>
                        </div>
                        <div className="experience-card">
                            <div className="experience-header">
                                <h4 className="company-name">Sylnux</h4>
                                <h5 className="position-title">Alternant en Développement Web et Mobile</h5>
                                <p className="duration">Octobre 2025 - Juin 2026 (1 an)</p>
                                <p className="location">Lyon, France</p>
                            </div>
                            <div className="experience-description">
                                <p> J'ai développé un site web </p>
                            </div>
                            <div className="skills-section">
                                <h5>Compétences développées :</h5>
                                <div className="skills-list">
                                    <span className="skill-tag">Python</span>
                                    <span className="skill-tag">Bootstrap</span>
                                    <span className="skill-tag">Django</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Entreprise; 