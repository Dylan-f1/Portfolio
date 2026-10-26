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
                                <span>Lyon, France</span>
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
                                        <li>La modernisation d'interfaces e-commerce</li>
                                        <li>La migration de technologies anciennes vers des frameworks modernes</li>
                                        <li>La mise en place de tests</li>
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
        </div>
    );
};

export default Entreprise;
