export const lamazuna = {
  id: 'lamazuna',
  type: 'entreprise',
  title: "Lamazuna — Storefront e-commerce",
  subtitle: "Site de vente cosmétiques éco-responsables",
  image: "/LMA.jpg",
  liveUrl: "",
  githubUrl: null,
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Saleor", "Mapbox GL JS"],
  courteDescription: "Refonte totale d'un site e-commerce éco-responsable avec migration vers Next.js App Router, TypeScript strict et Saleor comme backend e-commerce headless",

  conclusionOrale: "Lamazuna est mon projet le plus ambitieux et complexe techniquement. La migration complète vers Next.js App Router avec TypeScript strict représente une montée en compétences significative. J'ai dû maîtriser les concepts avancés de Server/Client Components, le SSR, et typer l'ensemble du code sans erreur de compilation. Le score Lighthouse supérieur à 90 démontre mon attention à la performance et au SEO. Ce projet prouve ma capacité à adopter rapidement des technologies de pointe et à les appliquer dans un contexte e-commerce professionnel exigeant.",

  contexte: `Lamazuna est une marque pionnière dans les cosmétiques solides et zéro déchet. En alternance chez Sylnux, j'ai été chargé de la refonte complète de leur site e-commerce avec Next.js App Router et TypeScript, en s'appuyant sur Saleor comme backend e-commerce headless et GraphQL pour la communication entre couches. Le design de certaines sections s'inspire du checkout ZAO développé en amont.`,

  defis: [
    {
      titre: "Schéma GraphQL / Saleor divergent",
      description: "Le schéma GraphQL de l'instance Saleor ne correspondait pas à la documentation officielle — les types CheckoutLineInput, les noms d'arguments (checkoutId vs id) et certains champs n'existaient tout simplement pas, ce qui a cassé la génération de types avec codegen.",
      solution: "Reverse-engineering du schéma réel directement via l'introspection GraphQL. Ajustement de toutes les mutations et queries pour correspondre à l'instance réelle, en documentant les écarts pour l'équipe."
    },
    {
      titre: "Breaking change Next.js 15 — params async",
      description: "Next.js 15 a introduit un breaking change où params devient une Promise dans les routes dynamiques, provoquant des erreurs de compilation dans plusieurs composants.",
      solution: "Revue systématique de toutes les routes dynamiques du projet et migration vers le hook use() pour résoudre les params de manière asynchrone, conformément à la nouvelle API."
    },
    {
      titre: "CSS globaux ignorés en App Router",
      description: "Les fichiers CSS du checkout (App.css, index.css) n'étaient pas chargés car Next.js App Router n'importe pas automatiquement les CSS globaux hors layout — les styles étaient silencieusement ignorés.",
      solution: "Centralisation de tous les imports CSS globaux dans le layout racine. Audit complet des imports de styles sur l'ensemble des composants."
    },
    {
      titre: "Tailwind Forms — surcharge des styles custom",
      description: "Le plugin @tailwindcss/forms appliquait des styles globaux sur tous les input, surchargeant les classes custom avec des ring bleus au focus.",
      solution: "Passage en strategy: 'class' dans la configuration du plugin pour n'appliquer les styles qu'aux éléments ciblés explicitement, sans impact sur le reste."
    },
    {
      titre: "Store Locator — synchronisation clusters / pins custom",
      description: "Pour le Store Locator (Mapbox GL JS), le vrai challenge a été de synchroniser la disparition des clusters natifs GL avec l'apparition des pins HTML custom au même seuil de zoom, évitant tout chevauchement visuel.",
      solution: "Utilisation d'expressions interpolate sur les propriétés d'opacité des deux couches (cluster GL et markers HTML) pour un fondu simultané et fluide au seuil de zoom défini."
    },
    {
      titre: "Migration JSX vers TypeScript — bugs silencieux",
      description: "La migration des composants JSX vers TypeScript a révélé des bugs préexistants silencieux — champs mal nommés entre interfaces et formulaires causant des undefined au runtime.",
      solution: "Approche méthodique fichier par fichier, création d'interfaces et types pour tous les modèles (Product, Cart, Order, etc.), utilisation de Zod pour la validation runtime."
    }
  ],

  solutions: {
    architecture: "Architecture server/client component claire : les fetches de données restent dans des server components, l'état interactif (drawer, sélection, formulaires) est géré côté client avec Context ou useState. Checkout isolé en route group pour éviter la pollution du layout principal.",
    typeSafety: "TypeScript strict activé avec interfaces complètes pour tous les modèles. Zod pour validation des données API. Pas d'any (sauf exceptions documentées). Les composants de formulaire suivent tous le même pattern de validation (fieldErrors[], hasError()) pour une cohérence comportementale garantie.",
    techniquesUtilisees: [
      "Next.js 15 App Router avec Server & Client Components",
      "TypeScript strict mode + Zod pour validation runtime",
      "GraphQL avec Saleor headless e-commerce",
      "Tailwind CSS avec configuration custom",
      "Mapbox GL JS pour le Store Locator interactif",
      "React Hook Form pour les formulaires",
      "Routes API Next.js pour préparer la transition backoffice",
      "next/image pour l'optimisation des images"
    ]
  },

  resultats: {
    metriques: [
      "Système de compte complet (commandes, adresses, informations, abonnement)",
      "Panier drawer animé et checkout fonctionnel",
      "Store locator avec carte interactive Mapbox",
      "Sélecteur de langue multi-channel FR/EN",
      "Lighthouse Score > 90 (Performance, SEO, Accessibility)",
      "TypeScript 100% — 0 erreur de compilation",
      "SSR pour SEO optimal"
    ],
    impact: "Site e-commerce performant et scalable bénéficiant de toutes les optimisations Next.js. Base de code type-safe facilitant la maintenance future et l'ajout de fonctionnalités. Gift card et box builder en cours de migration."
  },

  apprentissages: [
    "Tester le schéma GraphQL réel avant d'écrire les mutations",
    "Comprendre le modèle de rendu Next.js App Router en profondeur (server vs client boundary, chargement CSS, params async)",
    "La centralisation des patterns de validation et de styling dès le début évite les incohérences à l'échelle du projet",
    "Maîtrise de Next.js App Router avec Server/Client Components",
    "TypeScript en production (types complexes, génériques, Zod)",
    "Performance web (Core Web Vitals, Lighthouse)",
    "Intégration Mapbox GL JS avec layers et expressions interpolate"
  ],

  prochaines_etapes: [
    "Intégrer la vraie API backoffice en remplacement des JSON mocks",
    "Poursuivre la modification du Frontend pour les pages Home, Product, Box Builder"
  ]
};
