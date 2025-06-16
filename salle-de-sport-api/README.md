# CodingGame# API – Gestion d'une Salle de Sport

Projet réalisé dans le cadre du Coding Game B2 : création d'une API CRUD sur un thème libre.  
Cette API permet de gérer une salle de sport avec des **coachs**, des **cours** et des **abonnés**.

---

## Fonctionnalités

- CRUD complet sur 3 entités :
  - **coachs** (nom, spécialité)
  - **cours** (nom, description, coach associé)
  - **abonnes** (nom, email)
- Relation **N : N** entre `abonnes` et `cours`
- Inscription d’un abonné à un ou plusieurs cours
- Consultation des cours suivis par un abonné
- API REST structurée sous Express
- Base de données PostgreSQL
- Documentation via **Postman**

---

## Technologies utilisées

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **pg** (node-postgres)
- **dotenv**
- **nodemon**
- **pgAdmin** (visualisation BDD)
- **Postman** (tests & doc)

---

## Installation

### 1 . Cloner le projet

```bash
git clone https://github.com/<ton-user>/salle-de-sport-api.git
cd salle-de-sport-api
```

### 2 . Installer les dépendances

```bash
npm install
```

### 3 . Configurer les variables d’environnement

Créer un fichier `.env` :

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=<mot_de_passe>
DB_DATABASE=salle_de_sport
```

## Lancer l’API

```bash
npm run dev   # mode développement (nodemon)
# ou
node app.js   # mode production simple
```

Le serveur écoute par défaut sur **http://localhost:3000**.

---

## Endpoints principaux

### Coachs

| Méthode | URL               | Action          |
| ------- | ----------------- | --------------- |
| GET     | `/api/coachs`     | Tous les coachs |
| GET     | `/api/coachs/:id` | Coach par id    |
| POST    | `/api/coachs`     | Créer           |
| PUT     | `/api/coachs/:id` | Mettre à jour   |
| DELETE  | `/api/coachs/:id` | Supprimer       |

### Cours

| Méthode | URL                      | Action                           |
| ------- | ------------------------ | -------------------------------- |
| GET     | `/api/cours`             |
| GET     | `/api/cours/:id`         |
| POST    | `/api/cours`             |
| PUT     | `/api/cours/:id`         |
| DELETE  | `/api/cours/:id`         |
| GET     | `/api/cours/:id/abonnes` | _(optionnel : abonnés du cours)_ |

### Abonnés & Inscriptions

| Méthode | URL                      | Action             |
| ------- | ------------------------ | ------------------ |
| GET     | `/api/abonnes`           |
| GET     | `/api/abonnes/:id`       |
| POST    | `/api/abonnes`           |
| PUT     | `/api/abonnes/:id`       |
| DELETE  | `/api/abonnes/:id`       |
| POST    | `/api/abonnes/:id/cours` | Inscrire un abonné |
| GET     | `/api/abonnes/:id/cours` | Cours de l’abonné  |

---

## Documentation API

Une collection Postman se trouve dans le dossier **docs/**

## [docs/postman_salle_de_sport.json](./docs/postman_salle_de_sport.json)
