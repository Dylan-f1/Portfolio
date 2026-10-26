import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import APropos from './pages/APropos';
import CV from './pages/CV';
import Projets from './pages/Projets';
import ProjetDetail from './pages/projets/ProjetDetail';
import Entreprise from './pages/Entreprise';
import VeilleTechno from './pages/VeilleTechno';
import VeilleDetail from './pages/veille/VeilleDetail';
import NotFound from './pages/NotFound';

function App() {
  const { pathname } = useLocation();

  // Chaque changement de page repart du haut
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-container">
      <a href="#contenu" className="lv-skip">Aller au contenu</a>
      <Navbar />
      <main id="contenu" tabIndex={-1}>
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Pages principales */}
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/entreprise" element={<Entreprise />} />

          {/* Projets */}
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:id" element={<ProjetDetail />} />

          {/* Veille Technologique */}
          <Route path="/veille-techno" element={<VeilleTechno />} />
          <Route path="/veille/:id" element={<VeilleDetail />} />

          {/* Page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
