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
    points: [
      "Refonte checkout", "Migration JS → React", "Tailwind CSS", "Cypress",
      "Tests E2E", "Pixel-perfect",
    ],
  },

  conclusionOrale: "ZAO Makeup est mon premier projet professionnel majeur. Grâce à cette migration, le code est plus moderne et plus maintenable, l'interface est plus performante, et le tunnel de paiement est sécurisé par des tests automatisés — ce qui permet aux développeurs de modifier le site avec beaucoup moins de risques d'erreurs. Ce projet m'a permis de développer ma rigueur dans un environnement professionnel, ma compréhension des besoins clients, et mon expérience sur des technologies modernes utilisées en production. Il sert aujourd'hui de base technique réutilisée pour d'autres clients de Sylnux.",

  contexte: `ZAO Makeup est une marque de cosmétiques bio rechargeable. Le site e-commerce utilisait un ancien système de checkout développé en JavaScript vanilla, qui devenait difficile à maintenir et à faire évoluer. Dans le cadre de mon alternance chez Sylnux, j'ai été chargé de moderniser cette partie du site en migrant vers React avec Tailwind CSS, tout en conservant exactement le même design pour l'utilisateur.`,

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
      description: "La mise en place d'une suite de tests E2E était nouvelle pour moi. Ces tests simulent un utilisateur réel : ajout d'un produit au panier, passage par le tunnel de paiement, vérification que chaque étape fonctionne correctement.",
      solution: "J'ai progressé en lisant la documentation officielle de Cypress et en analysant les erreurs dans la console. Utilisation de fixtures pour mocker les paiements, data-testid sur tous les éléments clés et retry logic pour la stabilité des tests."
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
    impact: "Code plus moderne et plus maintenable, interface plus performante, tunnel de paiement sécurisé par tests automatisés. Les développeurs peuvent désormais modifier le site avec beaucoup moins de risques d'erreurs. Le projet sert de base technique réutilisée pour d'autres clients de Sylnux."
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
