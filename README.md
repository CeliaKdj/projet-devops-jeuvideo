# Arcade – Plateforme de Jeux Vidéo DevOPS

Projet DevOps – Epitech 2026  
**Étudiantes :** Célia & Magda : Lia & Dada

---

## C'est quoi ce projet ?

Deux jeux, une plateforme, plein d'automatisation.

| Jeu                          | Technologie         | Port local 
| **Space Invaders**           | TypeScript + Parcel | `8082` |
| **Two Ships In The Night**   | JavaScript + Vite   | `8081` |
| **Portail Arcade** (frontend)| HTML/CSS + Nginx    | `8080` |

Ce qu'on a mis en place côté **DevOps** :
- Les tests tournent automatiquement à chaque push — si ça casse, on le sait tout de suite (*Fail Fast*)
- Docker garantit que ce qui marche en local marchera aussi en prod
- On ne fusionne jamais du code qui fait échouer la CI

Côté **DevSecOps** :
- `npm audit` tourne à chaque intégration pour repérer les failles dans les dépendances
- Aucun token ou mot de passe dans le code tout passe par les **GitHub Secrets**
- Le linting bloque les mauvaises pratiques avant qu'elles atteignent `main`


### Two Ships In The Night

```bash
cd games/Two-Ships-ITN
npm install
npm run dev
```

---

## Tout lancer avec Docker

Si tu veux faire tourner toute la plateforme (portail + les deux jeux) en une seule commande :

```bash
# depuis la racine du projet
docker compose up --build
```

Ensuite tu ouvres :

| Service        |          URL          |
| Portail Arcade | http://localhost:8080 |
| Two Ships      | http://localhost:8081 |
| Space Invaders | http://localhost:8082 |


Pour tout arrêter :

```bash
docker compose down
```

Tu peux aussi construire une image seule si besoin :

```bash
docker build -t space-invaders ./games/Space-Invaders
docker build -t two-ships ./games/Two-Ships-ITN
docker build -t arcade-frontend ./frontend
```

> **Pourquoi Nginx ?** C'est le serveur web qui tourne dans chaque conteneur de production. Il sert les fichiers statiques (HTML/JS/CSS) générés par le build, léger & rapide.

---

## Lancer les tests

### Space Invaders — Jest

```bash
cd games/Space-Invaders
npm install
npm test
```

Les tests sont dans [games/Space-Invaders/__tests__/](games/Space-Invaders/__tests__/).


### Two Ships — Mocha + Chai

```bash
cd games/Two-Ships-ITN
npm install
npm test
```

Les tests sont dans [games/Two-Ships-ITN/test/](games/Two-Ships-ITN/test/).

---

## Le linter

On suit le [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html). La règle la plus concrète : `const` et `let` partout, plus jamais `var`.

### Space Invaders

```bash
cd games/Space-Invaders
npm run lint
```

### Two Ships

```bash
cd games/Two-Ships-ITN
npm run lint

# ESLint peut corriger beaucoup de choses automatiquement :
npx eslint src/**/*.js --fix
```

---

## Les pipelines CI/CD

Le principe est simple : à chaque push, GitHub vérifie que tout va bien avant d'autoriser quoi que ce soit.

```
Push / Pull Request
       │
       ▼
  ┌─────────┐     ┌──────────┐     ┌─────────────┐
  │  Lint   │────▶│  Tests   │────▶│    Build    │
  └─────────┘     └──────────┘     └─────────────┘
                                          │
                                          ▼
                                   ┌─────────────┐
                                   │  Déploiement│
                                   │ GitHub Pages│
                                   └─────────────┘
```

### Space Invaders — CI (`CI.yml`)

Se déclenche sur push ou PR vers `main`, `develop` ou `feat/space-invaders`.

| Étape | Commande |
|---|---|
| Lint | `npm run lint` |
| Tests unitaires | `npm test` |
| Build | `npm run build` |

### Space Invaders — CD (`CD.yml`)

Se déclenche uniquement si le CI a réussi sur `main`. Déploie le dossier `build/` sur GitHub Pages.

### Two Ships — CI (`ci-two-ships.yml`)

Se déclenche sur push, PR, ou manuellement depuis l'interface GitHub (`workflow_dispatch`).

| Étape | Commande | Si ça échoue |
|---|---|---|
| Lint (Google Style) | `npx eslint` | enregistre `LINT_FAILED=true`, continue |
| Audit de sécurité | `npm audit --audit-level=critical` | enregistre `AUDIT_FAILED=true`, continue |
| Tests | `npx mocha --reporter mocha-github-actions-reporter` | enregistre `TESTS_FAILED=true`, continue |
| Build | `npm run build` | bloque tout |
| Build image Docker | `docker build` | enregistre `DOCKER_FAILED=true`, continue |
| Upload artifact | `actions/upload-artifact@v4` | sauvegarde le dossier `dist/` téléchargeable |
| Résumé | `$GITHUB_STEP_SUMMARY` | tableau récap affiché dans l'onglet Actions |
| Notification Discord | `sarisia/actions-status-discord` | alerte envoyée si le job échoue |

### Two Ships — CD (`cd-two-ships.yml`)

Se déclenche sur push vers `main`, `develop`, `feat/two-ships`, ou manuellement. Déploie dans le sous-dossier `/two-ships/` de GitHub Pages.

### Frontend — CI (`ci-frontend.yml`)

Lance un audit [Lighthouse](https://developer.chrome.com/docs/lighthouse) sur le portail via Docker pour mesurer les performances (vitesse de chargement, accessibilité, bonnes pratiques SEO).

---

## Les secrets GitHub

On ne met jamais de token ou d'URL de webhook directement dans le code. Tout est dans **Settings → Secrets and variables → Actions** du dépôt.

Secret: `DISCORD_WEBHOOK`
À auoi ça sert: Envoie une alerte Discord quand une CI ou un déploiement échoue


Pour ajouter le secret Discord :

1. Aller dans `Settings` → `Secrets and variables` → `Actions`
2. Cliquer sur **New repository secret**
3. Nom : `DISCORD_WEBHOOK`
4. Valeur : l'URL du webhook récupérée dans les paramètres du salon Discord
5. Valider

Dans le workflow, on l'utilise comme ça :

```yaml
webhook: ${{ secrets.DISCORD_WEBHOOK }}
```

GitHub chiffre la valeur — elle n'apparaît jamais dans les logs, même en cas d'erreur.

---

## Déploiement sur GitHub Pages

### Activer Pages

1. `Settings` → `Pages`
2. Source : **GitHub Actions**

Le déploiement se fait automatiquement dès que la CI passe sur `main`.

| Jeu            | Chemin sur GitHub Pages |
| Space Invaders | `/` (racine)  |
| Two Ships      | `/two-ships/` |

---

## Répartition du travail

| Tâche | Célia | Magda |
|---|---|---|
| Tests unitaires + fonctionnels | Two Ships | Space Invaders |
| Pipeline CI/CD (fichiers YAML) | Space Invaders | Two Ships |
| Revue croisée via Pull Requests | ✓ | ✓ |