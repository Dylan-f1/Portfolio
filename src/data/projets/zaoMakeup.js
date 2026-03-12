export const zaoMakeup = {
  id: 'zaoMakeup',
  type: 'entreprise',
  title: "ZAO Makeup - Refonte Checkout",
  subtitle: "E-commerce Cosmétique Bio",
  image: "/LOGO-ZAO_VF.png",
  liveUrl: "https://shop.zaomakeup.com/fr/",
  githubUrl: null,
  technologies: ["React", "Tailwind CSS", "Cypress"],
  courteDescription: "Refonte complète du système de checkout d'une plateforme e-commerce de cosmétiques bio avec intégration multi-paiements",

  filRouge: {
    titre: "Points clés pour l'oral — Partie 3 : Projet professionnel",
    points: [
      "Contexte : ZAO Makeup, cosmétiques bio → ancien checkout en JavaScript vanilla, difficile à maintenir et faire évoluer",
      "Objectif : migrer vers React en conservant exactement le même design pour l'utilisateur",
      "Technologies utilisées : React + Tailwind CSS (interface) + Cypress (tests E2E automatisés)",
      "Ma contribution : migration du style vers Tailwind CSS, reproduction pixel-perfect, tests E2E avec Cypress",
      "Difficultés : Cypress (technologie nouvelle → timeouts, synchro, débogage console) + pixel-perfect (précision au pixel près)",
      "Résultats : code plus moderne et maintenable, tunnel de paiement sécurisé par tests, moins de risques d'erreurs pour les développeurs",
    ],
  },

  conclusionOrale: "ZAO Makeup représente mon premier projet professionnel majeur avec des contraintes strictes de fidélité design. La migration de JavaScript vanilla vers React avec Tailwind CSS, tout en maintenant une reproduction pixel-perfect, a été un défi technique important. La mise en place d'une suite de 10 tests E2E Cypress a assuré une qualité zéro défaut en production. Ce projet a été tellement réussi qu'il sert maintenant de base technique réutilisée pour d'autres clients de Sylnux, démontrant la qualité et la maintenabilité de mon code.",

  contexte: `ZAO Makeup est une marque de cosmétiques bio rechargeable. Dans le cadre de mon stage chez Sylnux, j'ai été chargé de moderniser leur système de paiement en ligne en migrant d'une solution JavaScript vanilla vers React avec Tailwind CSS, tout en maintenant 100% de fidélité au design existant.`,

  defis: [
    {
      titre: "Fidélité du design",
      description: "Le plus grand défi était de reproduire pixel-perfect le design existant. Chaque élément, chaque espacement, chaque animation devait être identique pour assurer la continuité de l'expérience utilisateur.",
      solution: "Utilisation intensive de Tailwind CSS avec configuration custom pour matcher exactement les couleurs et spacings. Comparaison systématique avec captures d'écran de l'ancien site. Validation par l'équipe design à chaque étape."
    },
    {
      titre: "Migration technologique",
      description: "Passer de JavaScript vanilla à React tout en intégrant Tailwind CSS représentait une réécriture complète du code.",
      solution: "Approche progressive : découpage en petits composants React réutilisables, migration page par page avec tests intensifs à chaque étape."
    },
    {
      titre: "Tests E2E avec Cypress",
      description: "Mise en place complète de la suite de tests E2E, ce qui était nouveau pour moi. Débogage des tests flaky et gestion des timeouts.",
      solution: "Apprentissage approfondi de Cypress, utilisation de fixtures pour mocker les paiements, mise en place de data-testid sur tous les éléments clés. Configuration de retry logic pour la stabilité."
    }
  ],

  solutions: {
    architecture: "Architecture React modulaire avec composants réutilisables (OrderSummary, StepPayment, InformationForm, etc.). Services séparés pour chaque provider de paiement.",
    qualite: "Suite de tests E2E Cypress couvrant tous les parcours utilisateur critiques : ajout au panier, modification quantité, application code promo, paiement avec chaque provider.",
    techniquesUtilisees: [
      "React Hooks (useState, useEffect, useContext)",
      "Tailwind CSS avec configuration custom",
      "Cypress pour tests E2E",
      "LocalStorage pour la persistance du panier",
      "Error boundaries pour la robustesse"
    ]
  },

  resultats: {
    metriques: [
      "100% de fidélité visuelle au design",
      "3 méthodes de paiement intégrées",
      "Suite de 10 tests E2E Cypress",
      "Code maintenance améliorée (composants réutilisables)"
    ],
    impact: "Checkout modernisé et robuste qui sert désormais de base pour d'autres projets de l'entreprise. Expérience utilisateur fluide maintenue tout en bénéficiant d'un code plus maintenable."
  },

  apprentissages: [
    "Gestion de contraintes strictes (100% fidélité design)",
    "Tests E2E avec Cypress",
    "Tailwind CSS à un niveau avancé",
    "Importance de la qualité en environnement production",
    "Gestion des états de transaction complexes",
    "Debugging de tests"
  ]
};
