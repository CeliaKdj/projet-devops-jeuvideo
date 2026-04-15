// remplacement des var par des const
// gere les mouvements et l'affichage du jeu
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
// lerp: cree les mouvement fluides:
export const lerp = (x, y, t) => (1 - t) * x + t * y;
// mapLinear: converti des données d'une echelle à une autre:
export const mapLinear = (x, a1, a2, b1, b2) =>
  b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
export const randFloat = (low, high) => low + Math.random() * (high - low);
// genere de l'aleatoire pr que les elements du jeux napparaissent pas tjrs au meme endroit:
export const randFloatSpread = (range) => range * (0.5 - Math.random());
