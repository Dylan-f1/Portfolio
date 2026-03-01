import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Entreprise.css';

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const s = { verticalAlign: 'middle', marginRight: '8px' };
const ss = { verticalAlign: 'middle', marginRight: '6px' };

const IconBuilding = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="9" x2="9" y2="21"/><line x1="15" y1="9" x2="15" y2="21"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={ss}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={ss}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={ss}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconBook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const IconLaptop = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconGear = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={s}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
// ─────────────────────────────────────────────────────────────────────────────

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
                                <h4 className="company-name"><IconBuilding />Sylnux</h4>
                                <h5 className="position-title">Alternant Développeur Web & Mobile</h5>
                                <p className="duration"><IconCalendar />Octobre 2025 - Juin 2026</p>
                                <p className="location"><IconPin />Lyon, France</p>
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
                                        <li><IconCheck />Code TypeScript 100% type-safe</li>
                                        <li><IconCheck />Réutilisation efficace de composants entre projets</li>
                                        <li><IconCheck />100% de fidélité visuelle au design original</li>
                                        <li><IconCheck />Suite de 10+ tests E2E Cypress</li>
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
                        <h3><IconBook />Apprentissages Globaux</h3>
                        <div className="learnings-grid">
                            <div className="learning-card">
                                <h4><IconLaptop />Compétences Techniques</h4>
                                <ul>
                                    <li>Maîtrise de React et Next.js en environnement professionnel</li>
                                    <li>TypeScript pour du code robuste et maintenable</li>
                                    <li>Tests E2E pour garantir la qualité</li>
                                    <li>Migration de systèmes legacy vers des stacks modernes</li>
                                </ul>
                            </div>
                            <div className="learning-card">
                                <h4><IconUsers />Soft Skills</h4>
                                <ul>
                                    <li>Gestion du temps et des priorités</li>
                                    <li>Autonomie dans la résolution de problèmes</li>
                                    <li>Adaptation rapide à différents contextes</li>
                                    <li>Écoute active des besoins clients</li>
                                </ul>
                            </div>
                            <div className="learning-card">
                                <h4><IconGear />Méthodologies</h4>
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
