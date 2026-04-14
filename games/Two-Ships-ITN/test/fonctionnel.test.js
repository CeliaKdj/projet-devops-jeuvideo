import assert from 'assert';
import { vec3_create, vec3_add, vec3_dot, vec3_distanceTo } from '../src/vec3.js';

describe('Tests Logique : Vecteurs 3D (vec3.js)', function() {
  
  it('doit créer un vecteur avec les coordonnées par défaut (0,0,0)', function() {
    const v = vec3_create();
    assert.strictEqual(v.x, 0);
    assert.strictEqual(v.y, 0);
    assert.strictEqual(v.z, 0);
  });

  it('doit additionner deux vecteurs correctement', function() {
    const v1 = vec3_create(1, 2, 3);
    const v2 = vec3_create(10, 10, 10);
    vec3_add(v1, v2);
    assert.strictEqual(v1.x, 11);
    assert.strictEqual(v1.y, 12);
    assert.strictEqual(v1.z, 13);
  });


  it('doit calculer la distance entre deux points', function() {
    const p1 = vec3_create(0, 0, 0);
    const p2 = vec3_create(3, 4, 0);
    const dist = vec3_distanceTo(p1, p2);
    assert.strictEqual(dist, 5);
  });

});