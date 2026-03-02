export const sylnux = {
  id: 'sylnux',
  type: 'entreprise',
  title: "Sylnux — Site vitrine & backoffice",
  subtitle: "Portfolio multilingue avec système de gestion de contenu intégré",
  image: "logo-sylnux.webp",
  liveUrl: "https://sylnux.com",
  githubUrl: null,
  technologies: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "NextAuth.js", "Zod", "PM2", "Nginx"],
  courteDescription: "Site vitrine de l'agence avec backoffice sécurisé, internationalisation FR/EN administrable et infrastructure de production sur VPS",

  conclusionOrale: "Le site Sylnux est le projet où j'ai le plus appris sur la sécurisation d'une infrastructure de production réelle. Au-delà du développement Next.js avec TypeScript et Prisma, j'ai mis en place une démarche complète garantissant les trois piliers de la sécurité : confidentialité (whitelist email, HTTPS/SSL, variables d'environnement sécurisées), intégrité (Zod pour la validation des données, TypeScript strict, format de réponse standardisé) et disponibilité (PM2 pour la reprise automatique des processus, systemd pour la persistance après redémarrage VPS, Nginx comme reverse proxy stable). Ce projet démontre que la cybersécurisation d'une solution applicative ne se limite pas au code — elle englobe l'infrastructure, les accès et la continuité de service.",

  contexte: `Sylnux est l'agence web dans laquelle j'effectue mon alternance. J'ai été chargé de construire leur site vitrine depuis zéro : une interface publique pour présenter les projets et services, couplée à un backoffice d'administration restreint. L'internationalisation FR/EN est gérée dynamiquement via une base de données PostgreSQL, permettant de modifier les traductions sans redéploiement. Le tout est hébergé sur un VPS Ubuntu derrière un reverse proxy Nginx.`,

  problematique: "Comment construire une plateforme portfolio professionnelle avec un système de traduction entièrement administrable, un backoffice sécurisé par whitelist email, et une infrastructure de production stable sur VPS — le tout dans un seul codebase Next.js ?",

  defis: [
    {
      titre: "Architecture backoffice isolée",
      description: "L'authentification du backoffice nécessitait une séparation claire du reste de l'application. La frontière Server/Client Component de Next.js complexifiait la gestion de session côté serveur.",
      solution: "Pattern client-only avec useSession() pour le backoffice, plus simple à maintenir qu'une séparation Server/Client Component. Routes d'auth dédiées (/backoffice-auth) totalement découplées du site public. Accès contrôlé par whitelist d'emails en variable d'environnement (BACKOFFICE_ALLOWED_EMAILS)."
    },
    {
      titre: "Breaking change Next.js 15 — params async",
      description: "La migration vers Next.js 15 impose un await params asynchrone dans les routes dynamiques. Les erreurs étaient silencieuses et difficiles à tracer.",
      solution: "Revue systématique de toutes les routes dynamiques du projet et migration vers les params asynchrones. Ce même problème, rencontré aussi sur Lamazuna, a forgé un réflexe de vérification systématique lors des upgrades Next.js."
    },
    {
      titre: "Migration données statiques vers traductions dynamiques",
      description: "Le système de traduction a évolué depuis des données statiques vers un modèle entièrement piloté par la base de données. Chaque texte statique devait être wrapé avec une fonction de traduction incluant un fallback.",
      solution: "Création d'endpoints API standardisés au format { success, data } et d'une interface de gestion des clés/termes en FR et EN dans le backoffice. Les traductions sont chargées dynamiquement selon la locale active."
    },
    {
      titre: "Incohérence nommage routes API / appels frontend",
      description: "Des 404 récurrents causés par des incohérences entre les noms des routes API et les appels frontend. Source de debugging longue avant d'identifier la convention comme cause racine.",
      solution: "Mise en place d'une convention de nommage stricte documentée sur l'ensemble du projet. Format de réponse { success, data } standardisé sur tous les endpoints pour une gestion d'erreur cohérente côté client."
    },
    {
      titre: "Conflit server_name Nginx",
      description: "Un conflit de server_name entre un ancien fichier de configuration Certbot et la nouvelle config du projet (les deux ciblant sylnux.com) rendait le comportement de routage imprévisible.",
      solution: "Suppression du fichier de configuration obsolète et centralisation de toute la configuration dans un seul bloc Nginx. Règle définitive : une seule config par domaine."
    },
    {
      titre: "Infrastructure VPS — déploiement complet",
      description: "Le déploiement impliquait plusieurs étapes critiques : configuration PM2, intégration systemd pour le redémarrage automatique, certificats SSL avec Certbot et gestion des variables d'environnement en production.",
      solution: "Configuration de PM2 avec ecosystem.config.js, intégration systemd pour la persistance après redémarrage serveur, HTTPS via Certbot avec renouvellement automatique, et Nginx comme reverse proxy avec redirection HTTP → HTTPS."
    },
    {
      titre: "Garantir disponibilité, intégrité et confidentialité (DIC)",
      description: "Un site de production exposé à internet doit répondre aux trois piliers de la sécurité : être disponible (uptime), préserver l'intégrité des données et garantir la confidentialité des accès.",
      solution: "Disponibilité : PM2 redémarre le processus Node.js automatiquement en cas de crash — systemd le relance après redémarrage VPS. Nginx assure la continuité du routage. Intégrité : Zod valide toutes les données entrantes côté API, TypeScript strict élimine les erreurs de typage à la compilation, format { success, data } standardisé sur tous les endpoints. Confidentialité : HTTPS (Let's Encrypt/Certbot) chiffre tous les échanges, whitelist email restreint l'accès backoffice, variables d'environnement sécurisées (aucun secret en clair dans le code)."
    }
  ],

  solutions: {
    architecture: "Deux espaces distincts : routes publiques sous (site)/ et backoffice sous /backoffice avec son propre layout et middleware de protection. Le format de réponse API { success, data } est standardisé sur l'ensemble des endpoints, ce qui simplifie la gestion d'erreurs et rend le code prévisible.",
    infrastructure: "PM2 orchestre le processus Node.js avec redémarrage automatique. Nginx assure le reverse proxy avec redirection HTTP → HTTPS, mise en cache des assets statiques Next.js. systemd garantit la disponibilité même après redémarrage du VPS.",
    techniquesUtilisees: [
      "Next.js App Router avec route groups (site)/ et /backoffice",
      "TypeScript strict + Zod pour validation des données",
      "Prisma ORM avec PostgreSQL",
      "NextAuth.js avec whitelist email pour le backoffice",
      "Système de traduction FR/EN administrable depuis BDD",
      "PM2 avec ecosystem.config.js",
      "Nginx reverse proxy + Let's Encrypt SSL",
      "systemd pour la persistance du processus"
    ]
  },

  resultats: {
    metriques: [
      "Site déployé en production sur https://sylnux.com avec SSL valide",
      "Backoffice fonctionnel avec gestion des traductions FR/EN en temps réel",
      "Infrastructure stable : PM2 + Nginx + systemd",
      "Internationalisation entièrement administrable sans redéploiement",
      "Conventions de code cohérentes : nommage routes API, format réponses, gestion erreurs Zod"
    ],
    impact: "Site vitrine professionnel de l'agence, opérationnel en production. Le backoffice permet à l'équipe de mettre à jour les traductions et contenus sans intervention technique, réduisant la dépendance aux développeurs pour les mises à jour de contenu."
  },

  apprentissages: [
    "Next.js 15 impose await params dans les routes dynamiques — revue systématique obligatoire lors des migrations",
    "Le pattern client-only pour l'auth de backoffice est plus simple à maintenir que la séparation Server/Client Component",
    "La cohérence de nommage entre routes API et appels frontend est critique — une convention stricte évite des sessions de débogage longues",
    "Centraliser la config Nginx en un seul fichier par domaine évite les conflits server_name silencieux",
    "La trilogie DIC (Disponibilité, Intégrité, Confidentialité) s'applique à l'infrastructure autant qu'au code : PM2/systemd pour la D, Zod/TypeScript pour l'I, HTTPS/whitelist pour la C",
    "PM2 + systemd est la combinaison minimale pour garantir la disponibilité d'un service Node.js en production sans orchestrateur complexe",
    "Déploiement complet sur VPS : PM2, systemd, Nginx, Certbot",
    "Gestion des variables d'environnement en production — aucun secret dans le dépôt Git"
  ],

  prochaines_etapes: [
    "Convertir le reste des données statiques en traductions dynamiques administrables",
    "Ajouter un module de gestion des projets (CRUD complet) depuis l'interface admin",
    "Mettre en place un pipeline CI/CD pour automatiser les déploiements depuis Git",
    "Ajouter des tests sur les endpoints API critiques (auth, traductions)",
    "Mettre en place des sauvegardes automatisées de la base PostgreSQL (pg_dump planifié) — garantie de reprise après incident"
  ]
};
