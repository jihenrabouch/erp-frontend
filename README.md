 ERP Frontend

[![Angular](https://img.shields.io/badge/Angular-21-red)](https://angular.io/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)

Frontend de l’ERP pour gérer **projets, tâches et équipes**.  
Cette application Angular communique avec le backend ERP pour fournir une interface utilisateur riche et interactive.

---

 🚀 Objectif du projet

L’objectif de ce frontend est de fournir une interface intuitive pour :  
- Créer, modifier et suivre les projets et tâches  
- Gérer les équipes et assigner les membres aux tâches  
- Suivre le temps passé sur chaque tâche et projet  
- Visualiser les statistiques et rapports via des dashboards  

---

 ⚙️ Technologies

- Angular 21  
- TypeScript  
- RxJS  
- HTML5 & CSS3  
- Bootstrap ou CSS natif pour le style  
- Communication avec le backend via HTTP (REST API)  

---

 📁 Structure du projet
src/
├─ app/
│ ├─ components/ # Composants UI (login, dashboard, projet, tâche)
│ ├─ services/ # Services Angular pour API
│ ├─ guards/ # Guards pour la sécurité des routes
│ ├─ interceptors/ # Intercepteurs HTTP pour JWT
│ ├─ app.routes.ts # Gestion des routes
│ ├─ app.config.ts # Configuration globale
├─ assets/ # Images, icônes, etc.
├─ styles.css # Styles globaux

---

⚡ Installation

1. Cloner le projet

```bash
git clone https://github.com/jihenrabouch/erp-frontend.git
cd erp-frontend
Installer les dépendances

npm install

🏃 Lancer l’application
ng serve


L’application sera accessible sur : http://localhost:4200/

L’interface communique avec le backend pour l’authentification et les opérations CRUD.
Authentification

Le login est sécurisé via JWT fourni par le backend.

Ajouter le token dans les headers pour les endpoints sécurisés :

Authorization: Bearer <token>

🧩 Fonctionnalités principales

Gestion des projets : création, modification, assignation d’équipes

Gestion des tâches : Kanban, drag & drop, suivi du temps

Reporting : statistiques, burn-down charts

Gestion utilisateurs et rôles : Admin, Chef de projet, Employé, QA, Support

📌 Bonnes pratiques

Ne jamais committer node_modules/ → utiliser .gitignore

Toujours tester localement avec ng serve avant de pousser

Utiliser Git pour chaque nouvelle fonctionnalité : branche, commit, merge

🔗 Liens utiles

Documentation Angular

Backend ERP sur GitHub
