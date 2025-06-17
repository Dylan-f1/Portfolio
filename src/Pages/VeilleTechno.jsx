import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/VeilleTechno.css';

const VeilleTechno = () => {
    // Données des articles avec URLs
    const articles = [
        {
            id: 1,
            title: "La Corée du Sud dévoile ses robots humanoïdes équipés de roues à 360° et de commandes flexibles qui défient l'imagination humaine",
            articleUrl: "https://newsly.fr/2025/05/24/la-coree-du-sud-devoile-ses-robots-humanoides-equipes-de-roues-a-360-et-de-commandes-flexibles-qui-defient-limagination-humaine/",
        },
        {
            id: 2,
            title: "Le robot Atlas de Boston Dynamics devient plus intelligent et plus affuté avec l'arrivée des capteurs optiques de LG",
            articleUrl: "https://www.enviro2b.com/2025/05/17/le-robot-atlas-de-boston-dynamics-devient-plus-intelligent-et-plus-affute-avec-larrivee-des-capteurs-optiques-de-lg/",
        },
        {
            id: 3,
            title: "La fin annoncée des superordinateurs : l'ordinateur quantique de Google exécute en quelques secondes ce qui aurait pris 47 ans",
            articleUrl: "https://techguru.fr/2025/05/16/la-fin-annoncee-des-superordinateurs-lordinateur-quantique-de-google-execute-en-quelques-secondes-ce-qui-aurait-pris-47-ans/",
        },
        {
            id: 4,
            title: "Première mondiale : une IA entrainée par un ordinateur quantique compose sa première chanson",
            articleUrl: "https://www.presse-citron.net/premiere-mondiale-une-ia-entrainee-par-un-ordinateur-quantique-compose-sa-premiere-chanson/",
        },
        {
            id: 5,
            title: "L'ordinateur quantique de Google exécute en quelques secondes ce qui aurait pris 47 ans",
            articleUrl: "https://techguru.fr/2025/05/16/la-fin-annoncee-des-superordinateurs-lordinateur-quantique-de-google-execute-en-quelques-secondes-ce-qui-aurait-pris-47-ans/",
        },
        {
            id: 6,
            title: "Neuralink : l'implant cérébral de Musk fait face à un problème technique",
            articleUrl: "https://www.futura-sciences.com/sante/actualites/technologie-neuralink-implant-cerebral-musk-fait-face-serieux-probleme-technique-122005/",
        }
    ];

    const handleArticleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="veille-techno-container">
            <Navbar />
            <div className="content">
                <header className="page-header">
                    <h1>Veille Technologique</h1>
                </header>
                
                <div className="articles-grid">
                    {articles.map(article => (
                        <div 
                            key={article.id} 
                            className="article-card"
                            onClick={() => handleArticleClick(article.articleUrl)}
                        >   
                            <div className="card-content">
                                <h3>{article.title}</h3>
                                <div className="read-more">
                                    <span>Lire l'article →</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VeilleTechno; 