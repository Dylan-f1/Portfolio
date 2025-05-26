import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Competences from './Pages/Compétence';
import CV from './Pages/CV';
import Projets from './Pages/Projets';
import APropos from './Pages/A-Propos';
import VielleTechno from './Pages/Vielle-Techno';
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
        <Route path="/vielle-techno" element={<VielleTechno />} />
      </Routes>
    </div>
  );
}

export default App; 