# Projet DevOps – Jeux Vidéo

Epitech 2026 – Célia & Magda

Deux jeux rétro avec une pipeline CI/CD complète.

---

## Lancer le projet

```bash
docker compose up --build
```

- Portail : http://localhost:8080
- Two Ships : http://localhost:8081
- Space Invaders : http://localhost:8082

Pour arrêter :

```bash
docker compose down
```

---

## Lancer les tests

**Space Invaders**
```bash
cd games/Space-Invaders
npm install
npm test
```

**Two Ships**
```bash
cd games/Two-Ships-ITN
npm install
npm test
```

---

## CI/CD

À chaque push sur `main` :
1. Lint + tests + build (si ça échoue, notification Discord)
2. Si tout passe → déploiement automatique

Les workflows sont dans `.github/workflows/`.

---

## Secrets

`DISCORD_WEBHOOK` à ajouter dans Settings → Secrets → Actions.



## Github Pages
https://celiakdj.github.io/projet-devops-jeuvideo/
