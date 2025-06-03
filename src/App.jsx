import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Competences from './Pages/compétence';
import CV from './Pages/cv';
import Projets from './Pages/projets';
import APropos from './Pages/a-propos';
import VeilleTechno from './Pages/veille-techno';
import Entreprise from './Pages/entreprise';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/veille-techno" element={<VeilleTechno />} />
        <Route path="/entreprise" element={<Entreprise />} />
      </Routes>
    </div>
  );
}

export default App; 