import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/Entreprise.css';

const Entreprise = () => {
    usePageTitle('Entreprise');
    return (
        <div className="entreprise">
            <PageHero titre="Mon Expérience en Entreprise" />

            {/* Expérience principale - Alternance */}
            <section className="lv-section">
                <div className="lv-wrap">
                    <article className="experience">
                        <header className="experience-header">
                            <span className="lv-tab lv-tab--blue">Terminée</span>
                            <h2 className="experience-company">Sylnux</h2>
                            <p className="experience-meta">
                                <span>Octobre 2025 - Juin 2026 (Alternance BTS SIO)</span>
                                <span>100 % remote</span>
                            </p>
                        </header>

                        <div className="experience-body">
                            <p className="experience-intro">
                                <Link to="/projets/sylnux" className="experience-lien"><strong>Sylnux</strong></Link> est une petite entreprise web <strong>sous-traitante</strong>, spécialisée
                                dans le développement web et d'e-commerces pour des marques de cosmétiques bio, notamment{' '}
                                <Link to="/projets/zaoMakeup" className="experience-lien"><strong>ZAO Makeup</strong></Link> et <Link to="/projets/lamazuna" className="experience-lien"><strong>Lamazuna</strong></Link>.
                            </p>

                            <div className="experience-missions">
                                <div className="lv-fiche">
                                    <h3 className="lv-h3">J'ai été recruté pour apporter un soutien sur le développement front-end moderne, notamment sur :</h3>
                                    <ul className="lv-list">
                                        <li>React</li>
                                        <li>Next.js</li>
                                        <li>TypeScript</li>
                                        <li>La mise en place de tests E2E</li>
                                    </ul>
                                </div>

                                <div className="lv-fiche">
                                    <h3 className="lv-h3">Au quotidien, je suis intervenu principalement sur :</h3>
                                    <ul className="lv-list">
                                        <li>Un conseiller beauté IA pour ZAO Makeup : détection du teint (MediaPipe FaceLandmarker, k-means), fonction Python serverless sur AWS Lambda</li>
                                        <li>La migration du tunnel d'achat en React/Tailwind avec Saleor (GraphQL) et la refonte du site ZAO Makeup en Next.js</li>
                                        <li>Un configurateur de carte cadeau et une box 3D personnalisable pour Lamazuna (React)</li>
                                        <li>Un back-office de gestion des traductions (Next.js, Prisma, PostgreSQL, NextAuth, Mailjet) et des tests E2E (Cypress)</li>
                                        <li>L'administration d'un VPS OVH, en autonomie complète à distance, synchronisée via Git/GitLab</li>
                                        <li>Claude Code au quotidien pour le debug, la revue de code et la documentation</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="experience-bilan lv-callout">
                                Cette expérience a été très enrichissante : j'y ai travaillé sur de{' '}
                                <strong>vrais projets clients</strong> avec des contraintes réelles de qualité
                                et de délais.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            {/* Stages avant l'alternance */}
            <section className="lv-section" aria-labelledby="stages-titre">
                <div className="lv-wrap">
                    <h2 id="stages-titre" className="stages-titre">Stages</h2>
                    <div className="stages-liste">
                        <article className="lv-fiche">
                            <p className="stage-meta">Août 2025</p>
                            <h3 className="lv-h3">Stage Développement Web · Sylnux</h3>
                            <p>Création d'un drawer (panier latéral) pour la boutique en ligne ; mise en place de tests end-to-end.</p>
                        </article>
                        <article className="lv-fiche">
                            <p className="stage-meta">Avril 2025 - Juillet 2025</p>
                            <h3 className="lv-h3">Stage Dév. Web, Mobile, Jeux et Logiciel · Quevyn Rohel EI</h3>
                            <p>Bases d'applications pro, gestion d'un serveur Node.js et du front associé, intégration de maquettes (CSS/React), réalisation 3D.</p>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Entreprise;
