# image node.js
FROM node:20-alpine AS builder

# dossier de travail dans le conteneur
WORKDIR /app

# copie des fichier de dependances pr optimiser le cache
COPY package*.json ./

# installation des dependances
RUN npm install

# copie du reste du code du jeu
COPY . .

# creation du dossier /app/dist
RUN npm run build

# serveur de production nginx
FROM nginx:alpine

# copie du build vers nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# port utilisé par le jeu
EXPOSE 80

# commande pr lancer le jeu
CMD ["nginx", "-g", "daemon off;"]