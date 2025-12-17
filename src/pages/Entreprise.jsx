import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Entreprise.css';
const Entreprise = () => {
    return (
        <div>
            <Navbar />
            <section className="entreprise-main-section">
                <h2>Mes Expériences en Entreprise</h2>
                
                <div className="entreprise-container">
                    {/* Introduction */}
                    <div className="intro-section">
                        <h3>Mon Parcours Professionnel</h3>
                        <p>
                            Durant mon <strong>BTS SIO</strong> (Services Informatiques aux Organisations), 
                            j'ai eu l'opportunité de mettre en pratique mes compétences à travers plusieurs 
                            expériences professionnelles enrichissantes. Ces stages et mon alternance m'ont permis 
                            de travailler sur des projets concrets, de comprendre les enjeux du développement en 
                            entreprise et d'affiner mes compétences techniques.
                        </p>
                        <p>
                            De la <em>refonte complète de systèmes e-commerce</em> à la <em>création de sites web 
                            pour des clients variés</em>, chaque mission m'a apporté une expérience unique et 
                            des apprentissages précieux.
                        </p>
                    </div>

                    {/* Expériences */}
                    <div className="experiences-grid">
                        {/* Alternance Sylnux */}
                        <div className="experience-card highlight-card">
                            <div className="experience-ribbon">En cours</div>
                            <div className="experience-header">
                                <h4 className="company-name"> Sylnux</h4>
                                <h5 className="position-title">Alternant Développeur Web & Mobile</h5>
                                <p className="duration"> Octobre 2025 - Juin 2026 (9 mois)</p>
                                <p className="location"> Lyon, France</p>
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
                                        <ul>
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
                                    </ul>
                                        <li>
                                            <strong>Travail en équipe</strong> - Collaboration quotidienne avec 
                                            mon patron
                                        </li>
                                    </ul>
                                </div>
                                <div className="accomplishments">
                                    <h6>Réalisations :</h6>
                                    <ul>
                                        <li>✅ Migration réussie vers Next.js App Router</li>
                                        <li>✅ Code TypeScript 100% type-safe (0 erreur de compilation)</li>
                                        <li>✅ Réutilisation efficace de composants entre projets</li>
                                        <li>✅ 100% de fidélité visuelle au design original</li>
                                        <li>✅ Suite de 10 tests E2E Cypress</li>
                                        <li>✅ 0 bug critique en production</li>
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
                                    <span className="skill-tag">Git</span>
                                </div>
                            </div>
                        </div>

                        {/* Stage Sylnux Août */}
                        <div className="experience-card">
                            <div className="experience-header">
                                <h4 className="company-name"> Sylnux</h4>
                                <h5 className="position-title">Stagiaire Développeur Web</h5>
                                <p className="duration"> Août 2025 (1 mois)</p>
                                <p className="location"> Lyon, France</p>
                            </div>
                            <div className="experience-description">
                                <p className="mission-intro">
                                    <strong>Projet :</strong> Développement d'un drawer (panier coulissant) pour 
                                    le site e-commerce ZAO Makeup.
                                </p>
                                <div className="missions-detail">
                                    <h6>Missions :</h6>
                                    <ul>
                                        <li>
                                            <strong>Refonte complète du système du panier</strong> - Création d'un drawer pour le panier
                                        </li>
                                    </ul>
                                </div>
                                <div className="accomplishments">
                                    <h6>Réalisations :</h6>
                                    <ul>
                                        <li>✅ 100% de fidélité visuelle au design original</li>
                                        <li>✅ Suite de 3 tests E2E Cypress</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="skills-section">
                                <h6>Technologies & Compétences :</h6>
                                <div className="skills-list">
                                    <span className="skill-tag">Bootstrap</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">Cypress</span>
                                    <span className="skill-tag">Git</span>
                                </div>
                            </div>
                        </div>

                        {/* Stage Quevyn Rohel */}
                        <div className="experience-card">
                            <div className="experience-header">
                                <h4 className="company-name"> Quevyn Rohel EI</h4>
                                <h5 className="position-title">Stagiaire Développeur Web</h5>
                                <p className="duration"> Avril 2025 - Juillet 2025 (2 mois)</p>
                                <p className="location"> Paris, France</p>
                            </div>
                            <div className="experience-description">
                                <p className="mission-intro">
                                    <strong>Projet :</strong> Création d'un site web vitrine pour une école d'art 
                                    chinoise.
                                </p>
                                <div className="missions-detail">
                                    <h6>Missions :</h6>
                                    <ul>
                                        <li>
                                            <strong>Développement du site web complet</strong> - De la conception 
                                            au déploiement
                                        </li>
                                        <li>
                                            <strong>Design responsive</strong> - Interface adaptée à tous les devices
                                        </li>
                                        <li>
                                            <strong>Intégration de galeries</strong> - Présentation des œuvres et 
                                            des cours
                                        </li>
                                        <li>
                                            <strong>Optimisation SEO</strong> - Pour améliorer la visibilité en ligne
                                        </li>
                                    </ul>
                                </div>
                                <div className="accomplishments">
                                    <h6>Réalisations :</h6>
                                    <ul>
                                        <li>✅ Site web moderne et responsive</li>
                                        <li>✅ Interface intuitive et artistique</li>
                                        <li>✅ Galerie d'images optimisée</li>
                                        <li>✅ Client satisfait du résultat</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="skills-section">
                                <h6>Technologies & Compétences :</h6>
                                <div className="skills-list">
                                    <span className="skill-tag">HTML/CSS</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">GSAP</span>
                                    <span className="skill-tag">Git</span>
                                    <span className="skill-tag">Responsive Design</span>
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
                                    <li>Intégrations complexes (paiements, APIs tierces)</li>
                                    <li>Tests E2E pour garantir la qualité</li>
                                </ul>
                            </div>
                            <div className="learning-card">
                                <h4>🤝 Soft Skills</h4>
                                <ul>
                                    <li>Communication avec l'équipe</li>
                                    <li>Gestion du temps et des priorités</li>
                                    <li>Travail en équipe</li>
                                    <li>Adaptation à différents contextes</li>
                                </ul>
                            </div>
                            <div className="learning-card">
                                <h4>🏗️ Méthodologies</h4>
                                <ul>
                                    <li>Approche test-driven pour la qualité</li>
                                    <li>Code reviews et bonnes pratiques Git</li>
                                    <li>Architecture évolutive et maintenable</li>
                                    <li>Documentation et commentaires clairs</li>
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
