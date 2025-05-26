import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Vielle-Techno.css';

const VielleTechno = () => {
    // Données des articles avec URLs
    const articles = [
        {
            id: 1,
            title: "L'évolution des technologies web",
            description: "Découvrez comment les technologies web ont évolué au fil des années.",
            imageUrl: "https://via.placeholder.com/300x200?text=Web+Tech",
            articleUrl: "https://example.com/article1",
            category: "Développement Web"
        },
        {
            id: 2,
            title: "Histoire des bases de données",
            description: "Un voyage à travers l'histoire des systèmes de gestion de bases de données.",
            imageUrl: "https://via.placeholder.com/300x200?text=Database",
            articleUrl: "https://example.com/article2",
            category: "Base de données"
        },
        {
            id: 3,
            title: "Les premiers langages de programmation",
            description: "Retour sur les langages qui ont façonné l'informatique moderne.",
            imageUrl: "https://via.placeholder.com/300x200?text=Programming",
            articleUrl: "https://example.com/article3",
            category: "Programmation"
        },
        {
            id: 4,
            title: "L'ère des mainframes",
            description: "Comment les ordinateurs centraux ont révolutionné l'informatique.",
            imageUrl: "https://via.placeholder.com/300x200?text=Mainframe",
            articleUrl: "https://example.com/article4",
            category: "Hardware"
        },
        {
            id: 5,
            title: "Naissance d'Internet",
            description: "Les origines du réseau mondial qui a changé le monde.",
            imageUrl: "https://via.placeholder.com/300x200?text=Internet",
            articleUrl: "https://example.com/article5",
            category: "Réseau"
        },
        {
            id: 6,
            title: "Les premiers systèmes d'exploitation",
            description: "L'évolution des OS depuis les premiers systèmes batch.",
            imageUrl: "https://via.placeholder.com/300x200?text=OS",
            articleUrl: "https://example.com/article6",
            category: "Système"
        }
    ];

    const handleArticleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="vielle-techno-container">
            <Navbar />
            <div className="content">
                <header className="page-header">
                    <h1>Vieilles Technologies</h1>
                </header>
                
                <div className="articles-grid">
                    {articles.map(article => (
                        <div 
                            key={article.id} 
                            className="article-card"
                            onClick={() => handleArticleClick(article.articleUrl)}
                        >
                            <div className="card-image">
                                <img src={article.imageUrl} alt={article.title} />
                                <div className="category-badge">{article.category}</div>
                            </div>
                            <div className="card-content">
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
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

export default VielleTechno;

