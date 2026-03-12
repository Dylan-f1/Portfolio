export const juliaApp = {
  id: 'juliaApp',
  type: 'personnel',
  title: "Julia App",
  subtitle: "Plateforme thérapeutique avec assistant IA 24/7",
  image: "/julia-logo.png",
  liveUrl: "",
  githubUrl: null,
  technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Google Gemini", "NativeWind", "Expo Router"],
  courteDescription: "Application thérapeutique cross-platform connectant patients et thérapeutes via un assistant IA conversationnel disponible entre les séances",

  conclusionOrale: "Julia App est le projet le plus complexe architecturalement que j'ai développé, et aussi celui qui posait les enjeux de sécurité les plus critiques. Les données traitées — humeur, anxiété, sommeil, conversations thérapeutiques, situations de crise — sont des données de santé au sens de l'article 9 du RGPD. Chaque décision architecturale a été guidée par cet enjeu : consentement explicite avant toute collecte, séparation stricte des données par rôle, magic link sans mot de passe pour réduire la surface d'attaque sur l'identité numérique des patients, SecureStore pour le stockage chiffré côté mobile. L'intégration de Gemini soulève également la question du transfert de données de santé vers un prestataire tiers (Google), ce qui nécessite une base légale explicite. Ce projet démontre ma capacité à penser la cybersécurité et la protection des données dès la conception, sur une application à fort enjeu humain.",

  contexte: `Julia App est une application thérapeutique qui connecte patients et thérapeutes via un assistant IA nommé Julia, disponible entre les séances. Les thérapeutes disposent d'un dashboard de suivi complet, tandis que les patients accèdent à leur interface via magic link — sans mot de passe. Le projet est développé en React Native avec Expo pour cibler à la fois le mobile et le web depuis un seul codebase.`,

  defis: [
    {
      titre: "Authentification multi-rôle complexe",
      description: "Deux middlewares distincts (protectProfessional et protectPatient) avec deux collections MongoDB séparées, et une logique conditionnelle défaillante qui rejetait systématiquement toutes les requêtes patients. Les routes /api/conversations et /api/patient/conversations se chevauchaient, provoquant des appels avec le mauvais token selon l'interface.",
      solution: "Séparation franche des middlewares, routes et endpoints API selon le rôle. Deux espaces de routes totalement isolés (/patient/... et /therapist/...) avec deux middlewares d'auth indépendants et des endpoints distincts."
    },
    {
      titre: "Boucle infinie — flow magic link",
      description: "Les patients vérifiant leur magic link étaient redirigés vers le dashboard thérapeute au lieu de leur propre interface. La logique de redirection dans le layout s'exécutait avant même la vérification du rôle.",
      solution: "Déplacement de la vérification d'authentification et du rôle au niveau screen plutôt qu'au niveau layout, via useEffect et AsyncStorage, évitant tout cycle de redirection."
    },
    {
      titre: "Vérification du consentement — cycle de redirection",
      description: "La vérification du consentement, placée au niveau du layout, créait un cycle infini : l'utilisateur non-consentant était redirigé vers le ConsentScreen, qui renvoyait vers le layout, qui reredirigait.",
      solution: "Descente de la vérification au niveau de chaque écran via un useEffect et AsyncStorage. Logique d'état critique toujours vérifiée au niveau screen pour éviter les cycles."
    },
    {
      titre: "Compatibilité cross-platform web/mobile",
      description: "expo-secure-store n'est pas disponible sur web, les alertes natives React Native ne fonctionnent pas sur web. Des APIs différentes selon la plateforme créaient des erreurs silencieuses.",
      solution: "Création d'un StorageService abstrait qui switche automatiquement entre SecureStore (mobile) et AsyncStorage (web). Gestion conditionnelle des alertes natives selon la plateforme cible."
    },
    {
      titre: "Expo Router — rupture avec React Navigation",
      description: "Expo Router introduit un système de navigation file-based qui casse toutes les conventions React Navigation classiques — route.params n'existe pas, navigation.navigate() non plus.",
      solution: "Migration complète vers useLocalSearchParams() et useRouter().push() sur l'ensemble des écrans, avec refonte des patterns de navigation dès l'architecture."
    },
    {
      titre: "Intégration Gemini API",
      description: "Le modèle gemini-1.5-flash-latest retournait une erreur 404 sur l'API v1beta. Identifiant incorrect qui a nécessité un debug approfondi de l'API.",
      solution: "Utilisation du bon identifiant gemini-1.5-flash (sans suffixe) après test direct du schéma API réel. Leçon généralisée à toutes les intégrations d'APIs tierces du projet."
    },
    {
      titre: "Conformité RGPD — données de santé et IA tierce",
      description: "L'application collecte des données de santé au sens de l'article 9 du RGPD (humeur, anxiété, sommeil, conversations thérapeutiques, détection de crise). Ces données sont transmises à Google Gemini pour le traitement IA, ce qui implique un transfert vers un sous-traitant avec des obligations contractuelles spécifiques.",
      solution: "Consentement explicite implémenté avant toute collecte (ConsentScreen avec stockage AsyncStorage). Séparation stricte des données par rôle : deux collections MongoDB distinctes, deux middlewares d'auth indépendants, aucune donnée patient accessible sans token valide. Magic link sans mot de passe pour préserver l'identité numérique des patients (OWASP A07 — Identification and Authentication Failures) : pas de mot de passe à compromettre. SecureStore (mobile) pour le stockage chiffré des tokens d'authentification. Routes API séparées (/patient/... et /therapist/...) pour l'isolation des données sensibles."
    }
  ],

  solutions: {
    architecture: "Architecture duale avec deux espaces de routes séparés (/patient/... et /therapist/...), deux middlewares d'auth indépendants et des endpoints API distincts. Vérification d'état critique (consentement, auth) au niveau screen pour éviter les cycles de redirection.",
    responsive: "Design responsive via useWindowDimensions() avec breakpoint à 768px — un seul codebase adapte son layout entre mobile et desktop sans fichiers séparés.",
    techniquesUtilisees: [
      "React Native + Expo pour cross-platform mobile/web",
      "Expo Router (file-based navigation)",
      "Node.js + MongoDB pour le backend",
      "Google Gemini pour l'IA conversationnelle",
      "NativeWind pour le styling",
      "Magic link authentication — préservation identité numérique (OWASP A07)",
      "Consentement explicite RGPD avant toute collecte de données de santé",
      "SecureStore (mobile) pour stockage chiffré des tokens — AsyncStorage (web) en fallback",
      "Deux collections MongoDB séparées par rôle — isolation des données sensibles",
      "Deux middlewares d'auth indépendants — routes /patient/... et /therapist/... totalement isolées",
      "AWS S3 pour l'upload de notes de session",
      "12 variantes de skeleton components + hook useApiError",
      "Système de détection automatique des situations de crise"
    ]
  },

  resultats: {
    metriques: [
      "Flow complet de bout en bout : création patient → magic link → chat Julia → dashboard thérapeute",
      "Système de compte thérapeute complet (login, inscription, profil, gestion patients)",
      "Chat patient façon iMessage avec sidebar de conversations résumées par l'IA",
      "Évaluations quotidiennes : humeur, anxiété, sommeil",
      "Upload de notes de session vers AWS S3",
      "Détection automatique des situations de crise",
      "12 variantes de skeleton components pour les états de chargement"
    ],
    impact: "Plateforme thérapeutique fonctionnelle permettant un suivi continu des patients entre les séances. L'assistant IA Julia réduit le sentiment d'isolement des patients et donne aux thérapeutes une vision plus complète de l'évolution de leurs patients."
  },

  apprentissages: [
    "La gestion de l'authentification multi-rôle demande une séparation franche dès l'architecture — middleware, routes et stockage doivent être totalement isolés entre les rôles",
    "Les données de santé (RGPD art. 9) imposent une conception sécurisée dès le départ : consentement explicite, minimisation, isolation par rôle — pas en post-production",
    "Le magic link sans mot de passe réduit la surface d'attaque sur l'identité numérique : pas de mot de passe à brute-forcer, pas de réutilisation de credentials (OWASP A07)",
    "Transmettre des données de santé à un sous-traitant IA (Google Gemini) soulève une question RGPD explicite : base légale, DPA (Data Processing Agreement), transfert hors UE",
    "Expo Router impose un modèle de navigation fondamentalement différent de React Navigation — repenser les patterns de navigation dès le départ",
    "La vérification d'état critique (consentement, auth) au niveau screen est toujours plus robuste qu'au niveau layout pour éviter les cycles",
    "Tester chaque intégration d'API tierce (Gemini, Mailjet) sur le schéma réel avant d'écrire la logique métier",
    "Abstraction des APIs natives (SecureStore/AsyncStorage) pour la compatibilité cross-platform sans compromettre la sécurité mobile"
  ],

  prochaines_etapes: [
    "Implémenter les notifications de crise en temps réel (push notifications quand Julia détecte une situation grave)",
    "Affiner le système d'évaluation quotidienne avec des visualisations graphiques dans le dashboard thérapeute",
    "Ajouter une couche de tests unitaires sur les services critiques (auth, geminiService, emailService)",
    "Rédiger une politique de confidentialité conforme RGPD et implémenter le droit à l'effacement des données (droit à l'oubli — art. 17)"
  ]
};
