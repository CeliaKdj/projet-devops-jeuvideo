# image node.js
FROM node:18-slim AS builder

# dossier de travail dans le conteneur
WORKDIR /app

# installation outils de build pour advzip-bin(dependances de compression)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

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