import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Competences from './pages/Competences';
import CV from './pages/CV';
import Projets from './pages/Projets';
import ProjetDetail from './pages/projets/ProjetDetail';
import Entreprise from './pages/Entreprise';
import VeilleTechno from './pages/VeilleTechno';
import VeilleDetail from './pages/veille/VeilleDetail';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Pages principales */}
        <Route path="/competences" element={<Competences />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/entreprise" element={<Entreprise />} />
        
        {/* Projets */}
        <Route path="/projets" element={<Projets />} />
        <Route path="/projets/:id" element={<ProjetDetail />} />
        
        {/* Veille Technologique */}
        <Route path="/veille-techno" element={<VeilleTechno />} />
        <Route path="/veille/:id" element={<VeilleDetail />} />
        
        {/* Page 404 - À créer si besoin */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;