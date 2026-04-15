import {clamp, lerp} from '../src/ts/math/math';
import {normalize, dot, add, subtract, lerp as vectorLerp, magnitude} from '../src/ts/math/vector';
import {distance, toVector} from '../src/ts/math/polar-vector';

// Tests fonctionnels : combinaison de plusieurs fonctions
// simulant des comportements réels du jeu

describe('Déplacement d\'un projectile (clamp + lerp)', () => {
  test('un projectile qui dépasse la limite est bloqué à la borne max', () => {
    const vitesse = lerp(0, 100, 1.5); // lerp dépasse 100
    const positionFinale = clamp(0, 100, vitesse); // clampé à 100
    expect(positionFinale).toBe(100);
  });

  test('un projectile dans les limites reste à sa position', () => {
    const vitesse = lerp(0, 100, 0.5); // 50
    const positionFinale = clamp(0, 100, vitesse);
    expect(positionFinale).toBe(50);
  });

  test('un projectile en dessous de 0 est bloqué à 0', () => {
    const vitesse = lerp(0, 100, -0.5); // négatif
    const positionFinale = clamp(0, 100, vitesse);
    expect(positionFinale).toBe(0);
  });
});

describe('Collision entre deux entités (distance + normalize)', () => {
  test('deux entités proches entrent en collision', () => {
    const posA = {x: 0, y: 0};
    const posB = {x: 3, y: 4};
    const dist = magnitude(subtract(posB, posA)); // distance = 5
    const rayonCollision = 6;
    expect(dist).toBeLessThan(rayonCollision);
  });

  test('deux entités éloignées ne collisionnent pas', () => {
    const posA = {x: 0, y: 0};
    const posB = {x: 100, y: 100};
    const dist = magnitude(subtract(posB, posA));
    const rayonCollision = 10;
    expect(dist).toBeGreaterThan(rayonCollision);
  });

  test('la direction vers une cible est un vecteur normalisé (magnitude ≈ 1)', () => {
    const posA = {x: 0, y: 0};
    const posB = {x: 3, y: 4};
    const direction = normalize(subtract(posB, posA));
    const mag = magnitude(direction);
    expect(mag).toBeCloseTo(1, 5);
  });
});

describe('Interpolation de position (lerp vectoriel)', () => {
  test('à t=0 la position est au départ', () => {
    const depart = {x: 0, y: 0};
    const arrivee = {x: 100, y: 100};
    const pos = vectorLerp(depart, arrivee, 0);
    expect(pos).toEqual({x: 0, y: 0});
  });

  test('à t=1 la position est à l\'arrivée', () => {
    const depart = {x: 0, y: 0};
    const arrivee = {x: 100, y: 100};
    const pos = vectorLerp(depart, arrivee, 1);
    expect(pos).toEqual({x: 100, y: 100});
  });

  test('à t=0.5 la position est au milieu', () => {
    const depart = {x: 0, y: 0};
    const arrivee = {x: 100, y: 100};
    const pos = vectorLerp(depart, arrivee, 0.5);
    expect(pos).toEqual({x: 50, y: 50});
  });
});
