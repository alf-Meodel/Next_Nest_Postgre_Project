# Next Nest PosgreSQL

<!-- Main image  -->

![border](./assets/line/border_deco_rt.png)

# Sommaire

- [Introduction au projet](#introduction-au-projet)
- [Objectif de l'application](#objectif-de-lapplication)
  - [Généralités](#généralités)
  - [Détails](#détails)

# Navigation

- [Benchmark Next Nest](./doc/benchmark_next_nest.md)

![border](./assets/line/line-pink-point_l.png)

# Introduction au projet

![border](./assets/line/line-teal-point_r.png)

Ce projet consiste à développer une application web full-stack évolutive. En combinant les technologies modernes comme **Next.js** pour une interface utilisateur performante, **NestJS avec Prisma ORM** pour un backend robuste, et une intégration continue sur **AWS et Vercel**, cette application vise à offrir une expérience utilisateur de haute qualité et un déploiement facilité.

## Les principales fonctionnalités incluent :

- Authentification sécurisée grâce à JWT.
- Gestion des paiements via Stripe, avec intégration des webhooks pour des mises à jour en temps réel.
- Téléchargement et gestion d’images avec AWS S3.
- Mise à jour en temps réel avec WebSockets.
- Migrations et typages automatisés avec Prisma pour la base de données PostgreSQL.
- Design esthétique et réactif avec Material UI et Tailwind CSS.
- Optimisation des performances grâce au cache des données et à la gestion des requêtes avec Next.js.

En suivant cette approche, l'application sera capable de répondre aux besoins d'une plateforme d'entreprise avec un design moderne, des performances optimales et une sécurité renforcée.

<a href="#sommaire">
<img src="assets/button/back_to_top.png" alt="Home page" style="width: 150px; height: auto;">
</a>

![border](./assets/line/line-pink-point_l.png)

# Objectif de l'application

![border](./assets/line/line-teal-point_r.png)

## Généralités

### Creation d'une marketplace ou une plateforme SaaS (Software as a Service) :

Les utilisateurs peuvent acheter des services (comme des formations ou des abonnements).
Les administrateurs peuvent gérer les contenus (comme des produits, articles ou données des utilisateurs).
Les clients reçoivent des notifications en temps réel sur leurs commandes, paiements ou interactions.

## Détails

### Gérer les utilisateurs et l'authentification :

Les utilisateurs peuvent s'inscrire, se connecter et gérer leurs comptes en toute sécurité grâce à l'authentification JWT.
Gestion des rôles pour administrateurs, utilisateurs standards ou autres.

### Vendre des produits ou des services avec paiements sécurisés :

Les utilisateurs peuvent acheter des produits ou des services.
Intégration avec Stripe pour traiter les paiements et gérer les transactions.
Notifications en temps réel sur les paiements via des webhooks.

### Afficher et interagir avec des données en temps réel :

Les utilisateurs reçoivent des mises à jour instantanées grâce à l'intégration de WebSockets (par exemple, un système de chat ou des notifications en direct).
Les administrateurs peuvent voir les modifications ou les actions des utilisateurs en direct.

### Gérer des ressources multimédias :

Les utilisateurs ou administrateurs peuvent téléverser des images (par exemple, pour des profils, des produits ou des galeries).
Les images sont stockées efficacement dans un système de fichiers ou sur AWS S3.

### Fournir une interface rapide et agréable :

Une interface moderne et intuitive grâce à Material UI et Tailwind CSS.
Performances optimisées avec le cache et la réduction des appels redondants.

### Assurer une sécurité et un déploiement fiables :

La plateforme est accessible sur un domaine personnalisé sécurisé par HTTPS.
Intégration continue pour déployer rapidement et sans interruption les mises à jour.

![border](./assets/line/line-teal-point_l.png)

<a href="#sommaire">
<img src="assets/button/back_to_top.png" alt="Home page" style="width: 150px; height: auto;">
</a>

![border](./assets/line/border_deco_rt.png)
