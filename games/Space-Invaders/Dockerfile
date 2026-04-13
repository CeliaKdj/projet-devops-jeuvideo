# étape 1 : construire le jeu
FROM node:18 AS builder
# utiliser une la version 18 de node.js
WORKDIR /app
#se place dans le dossier /app
COPY package*.json ./
#opti du cache
RUN npm install
#installe les dépendances
COPY . .
# copie tt le code
RUN npm run build
#compilation du jeu

# étape 2 : servir le jeu avec nginx
FROM nginx:alpine
#serveur web léger
COPY --from=builder /app/build /usr/share/nginx/html
#copie le build dans nginx
EXPOSE 80
#expose le port 80 pour accéder au jeu
