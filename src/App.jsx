import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Competences from './Pages/Compétence';
import CV from './Pages/CV';
import Portfolio from './Pages/Portfolio';
import APropos from './Pages/A-Propos'; 
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
    </div>
  );
}

export default App;