import React from 'react';

// En-tête commun : panneau bleu Alpine, liseré rose en biais.
// `aside` place un visuel sur fond blanc à droite (variante scindée).
const PageHero = ({ titre, surtitre, aside, children }) => {
  const classes = ['lv-hero'];
  if (aside) classes.push('lv-hero--split');
  if (titre.length > 28) classes.push('lv-hero--long');

  const contenu = (
    <>
      {surtitre && <div className="lv-hero-top">{surtitre}</div>}
      <h1 className="lv-hero-title">{titre}</h1>
      {children && <div className="lv-hero-body">{children}</div>}
    </>
  );

  return (
    <header className={classes.join(' ')}>
      <div className="lv-hero-panel">
        {aside ? contenu : <div className="lv-hero-inner">{contenu}</div>}
      </div>
      {aside && <div className="lv-hero-aside">{aside}</div>}
    </header>
  );
};

export default PageHero;
