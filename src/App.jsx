import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Competences from './Pages/competence';
import CV from './Pages/CV';
import Projets from './Pages/projets';
import APropos from './Pages/A-Propos';
import VeilleTechno from './Pages/Veille-Techno';
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