# Suivi du projet Portfolio-A-AJINOU

## 1. Initialisation et publication du dépôt sur GitHub

### Étapes réalisées :

- [x] **Vérification de la branche principale** : La branche principale locale s'appelle `main`.
- [x] **Configuration du remote GitHub** : Ajout du remote `origin` pointant vers https://github.com/Nano-a/Portfolio-A-AJINOU.git
- [x] **Push initial** : Envoi de l'état actuel du projet sur la branche `main` du repository GitHub, en écrasant tout l'historique précédent pour ne garder que l'état actuel (commande : `git push -u origin main --force`).

### Explications :
- Cette méthode permet de publier le projet comme s'il venait d'être créé, sans conserver l'historique des modifications précédentes.
- L'utilisation de `--force` garantit que seul l'état actuel est visible sur GitHub, ce qui est utile pour un démarrage propre.

---

## Prochaines étapes possibles
- Ajouter des collaborateurs sur GitHub
- Mettre en place des branches de développement
- Configurer des actions CI/CD
- Rédiger une documentation plus détaillée

--- 

## 2. Mise en ligne du site sur GitHub Pages

### Étapes réalisées :
- [x] Analyse complète du projet (structure, framework, build)
- [x] Génération du build statique avec Vite (`npm run build`)
- [x] Installation de l'outil `gh-pages` pour le déploiement
- [x] Ajout du script `deploy` dans package.json
- [x] Configuration du chemin de base dans vite.config.ts (`base: '/Portfolio-A-AJINOU/'`)
- [x] Déploiement automatique sur la branche `gh-pages` (`npm run deploy`)

### Explications :
- Le site est généré dans le dossier `dist` puis publié automatiquement sur la branche `gh-pages`.
- GitHub Pages sert alors le site à l'adresse : https://nano-a.github.io/Portfolio-A-AJINOU/
- Cette méthode est la plus efficace et la plus fiable pour un projet Vite/React moderne.

--- 

## 3. Correction du routage GitHub Pages (SPA)

### Étapes réalisées :
- [x] Ajout d'un script 'postbuild' dans package.json pour copier index.html en 404.html après chaque build
- [x] Reconstruction du site avec npm run build
- [x] Redéploiement du site avec npm run deploy

### Explications :
- GitHub Pages utilise le fichier 404.html pour rediriger toutes les routes inconnues vers l'application React (Single Page Application).
- Copier index.html en 404.html permet de garantir que toutes les routes de l'application fonctionnent, même en cas de rafraîchissement ou d'accès direct à une sous-page.

--- 