import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Competences from './Pages/Competences.jsx';
import CV from './Pages/CV.jsx';
import Projets from './Pages/Projets.jsx';
import APropos from './Pages/A-Propos.jsx';
import VeilleTechno from './Pages/Veille-Techno.jsx';
import Entreprise from './Pages/Entreprise.jsx';
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