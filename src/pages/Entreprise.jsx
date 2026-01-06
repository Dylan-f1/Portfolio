import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Entreprise.css';

const Entreprise = () => {
    return (
        <div>
            <Navbar />
            <section className="entreprise-main-section">
                <h2>Mon Expérience en Entreprise</h2>
                
                <div className="entreprise-container">
                    {/* Introduction */}
                    <div className="intro-section">
                        <h3>Mon Parcours Professionnel</h3>
                        <p>
                            Durant mon <strong>BTS SIO</strong> (Services Informatiques aux Organisations), 
                            j'ai eu l'opportunité de mettre en pratique mes compétences à travers plusieurs 
                            expériences professionnelles. J'ai effectué des stages qui m'ont permis de 
                            découvrir le développement web en entreprise et d'acquérir des compétences 
                            techniques solides.
                        </p>
                        <p>
                            Je suis actuellement en <strong>alternance chez Sylnux</strong>, où je travaille 
                            sur des projets de <em>refonte complète de systèmes e-commerce</em>.
                        </p>
                    </div>

                    {/* Expérience principale - Alternance */}
                    <div className="main-experience">
                        <div className="experience-card highlight-card">
                            <div className="experience-ribbon">En cours</div>
                            <div className="experience-header">
                                <h4 className="company-name">🚀 Sylnux</h4>
                                <h5 className="position-title">Alternant Développeur Web & Mobile</h5>
                                <p className="duration">📅 Octobre 2025 - Juin 2026</p>
                                <p className="location">📍 Lyon, France</p>
                            </div>
                            <div className="experience-description">
                                <p className="mission-intro">
                                    <strong>Contexte :</strong> Entreprise spécialisée dans le développement web 
                                    et mobile pour des clients dans le secteur de la cosmétique et du e-commerce.
                                </p>
                                <div className="missions-detail">
                                    <h6>Missions principales :</h6>
                                    <ul>
                                        <li>
                                            <strong>Développement de sites e-commerce complets</strong> - Création 
                                            et maintenance de plateformes pour marques de cosmétiques
                                        </li>
                                        <li>
                                            <strong>Refonte du site Lamazuna</strong> - Migration complète vers 
                                            Next.js avec TypeScript, intégration du système de checkout développé 
                                            pour ZAO Makeup
                                        </li>
                                        <li>
                                            <strong>Optimisation des performances</strong> - Amélioration des temps 
                                            de chargement et du SEO des sites clients
                                        </li>
                                        <li>
                                            <strong>Refonte complète du système de checkout</strong> - Migration 
                                            de JavaScript vanilla vers React avec Tailwind CSS
                                        </li>
                                        <li>
                                            <strong>Tests E2E avec Cypress</strong> - Mise en place d'une suite 
                                            de tests complète pour garantir la qualité
                                        </li>
                                        <li>
                                            <strong>Respect strict du design</strong> - Reproduction pixel-perfect 
                                            du design existant
                                        </li>
                                        <li>
                                            <strong>Travail en équipe</strong> - Collaboration quotidienne avec 
                                            mon patron
                                        </li>
                                    </ul>
                                </div>
                                <div className="accomplishments">
                                    <h6>Réalisations :</h6>
                                    <ul>
                                        <li>✅ Code TypeScript 100% type-safe</li>
                                        <li>✅ Réutilisation efficace de composants entre projets</li>
                                        <li>✅ 100% de fidélité visuelle au design original</li>
                                        <li>✅ Suite de 10+ tests E2E Cypress</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="skills-section">
                                <h6>Technologies & Compétences :</h6>
                                <div className="skills-list">
                                    <span className="skill-tag">Next.js</span>
                                    <span className="skill-tag">TypeScript</span>
                                    <span className="skill-tag">React</span>
                                    <span className="skill-tag">Tailwind CSS</span>
                                    <span className="skill-tag">Cypress</span>
                                    <span className="skill-tag">Gitlab</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Apprentissages globaux */}
                    <div className="global-learnings">
                        <h3>📚 Apprentissages Globaux</h3>
                        <div className="learnings-grid">
                            <div className="learning-card">
                                <h4>💻 Compétences Techniques</h4>
                                <ul>
                                    <li>Maîtrise de React et Next.js en environnement professionnel</li>
                                    <li>TypeScript pour du code robuste et maintenable</li>
                                    <li>Tests E2E pour garantir la qualité</li>
                                    <li>Migration de systèmes legacy vers des stacks modernes</li>
                                </ul>
                            </div>
                            <div className="learning-card">
                                <h4>🤝 Soft Skills</h4>
                                <ul>
                                    <li>Gestion du temps et des priorités</li>
                                    <li>Autonomie dans la résolution de problèmes</li>
                                    <li>Adaptation rapide à différents contextes</li>
                                    <li>Écoute active des besoins clients</li>
                                </ul>
                            </div>
                            <div className="learning-card">
                                <h4>⚙️ Méthodologies</h4>
                                <ul>
                                    <li>Code reviews et bonnes pratiques Git</li>
                                    <li>Architecture évolutive et maintenable</li>
                                    <li>Documentation technique claire</li>
                                    <li>Tests automatisés et CI/CD</li>
                                    <li>Respect des standards de qualité</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Entreprise;