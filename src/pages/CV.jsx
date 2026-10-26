import React from 'react';
import PageHero from '../components/PageHero';
import { IconDownload } from '../components/Icons';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/CV.css';

const CV = () => {
  usePageTitle('Mon CV');
  return (
    <div className="cv-page">
      <PageHero titre="Mon CV">
        <a href="/CV-DylanFERNANDES.pdf" download className="lv-btn">
          <IconDownload />
          Télécharger le CV (PDF)
        </a>
      </PageHero>

      <section className="lv-section">
        <div className="lv-wrap">
          <img className="cv-page-image" src="/CV-DylanFERNANDES.png" alt="CV de Dylan Fernandes" />
        </div>
      </section>
    </div>
  );
};

export default CV;
