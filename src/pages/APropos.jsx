import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import Parcours from '../components/Parcours';
import { IconDownload } from '../components/Icons';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/APropos.css';

const APropos = () => {
  const [showCV, setShowCV] = useState(false);
  usePageTitle('À propos');

  return (
    <div className="a-propos">
      <PageHero titre="À Propos de Moi" />

      {/* Introduction */}
      <section className="lv-section">
        <div className="lv-wrap a-propos-intro">
          <div className="lv-prose">
            <p className="a-propos-lead">
              Ma passion pour l'informatique est née des jeux vidéo. Ce qui m'attirait, ce n'était pas simplement de jouer, c'était de comprendre comment ça fonctionnait et d'en créer. Avec le temps, cette curiosité s'est orientée vers le développement d'applications et le web, ce qui m'a décidé à faire un bac STI2D option SIN.
            </p>
            <p>
              En parallèle, je suis passionné par la Formule 1. Pour moi c'est plus qu'un sport, c'est un concentré de technologie, d'optimisation et d'innovation permanente exactement la même logique que j'essaie d'appliquer dans mon code : chercher constamment à faire mieux, plus propre, plus performant.
            </p>
          </div>
          <p className="a-propos-chute lv-callout">
            Ces deux passions ont un point commun : la technologie au service de la performance. C'est ce qui m'a conduit vers le BTS SIO option SLAM. Les transformer en projets techniques (SpeedTrack, Geeki) m'a ensuite fait découvrir la dimension projet, celle qui m'intéresse aujourd'hui le plus : d'où le Bachelor Chef de Projet Web & Digital.
          </p>
        </div>
      </section>

      <Parcours />

      {/* CV */}
      <section className="lv-section a-propos-cv">
        <div className="lv-wrap">
          <button
            type="button"
            className="lv-btn lv-btn--ink"
            aria-expanded={showCV}
            aria-controls="a-propos-cv"
            onClick={() => setShowCV(!showCV)}
          >
            {showCV ? 'Masquer' : 'Afficher'} mon CV
          </button>

          {showCV && (
            <div id="a-propos-cv" className="cv-apercu">
              <img src="/CV-DylanFERNANDES.png" alt="CV de Dylan Fernandes" />
              <a href="/CV-DylanFERNANDES.pdf" download className="lv-btn">
                <IconDownload />
                Télécharger le CV (PDF)
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default APropos;
