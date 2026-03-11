import React from 'react';
import '../styles/FilRouge.css';

const FilRouge = ({ titre, points }) => {
  return (
    <div className="fil-rouge-card">
      <div className="fil-rouge-header">
        <span className="fil-rouge-icon">🎤</span>
        <h3 className="fil-rouge-titre">{titre}</h3>
      </div>
      <ul className="fil-rouge-points">
        {points.map((point, index) => (
          <li key={index} className="fil-rouge-point">
            <span className="fil-rouge-arrow">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilRouge;
