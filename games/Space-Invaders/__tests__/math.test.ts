import {clamp, lerp} from '../src/ts/math/math';
import {normalize, dot, add, subtract} from '../src/ts/math/vector';
import {distance, toVector} from '../src/ts/math/polar-vector';

describe('clamp', () => {
  test('clamp(1,10,2) returns 2', () => {
    expect(clamp(1, 10, 2)).toBe(2);
  });

  test('clamp(1,10,-12) returns 1', () => {
    expect(clamp(1, 10, -12)).toBe(1);
  });
});

describe('lerp', () => {
  test('lerp(1,10,2) returns 19', () => {
    expect(lerp(1, 10, 2)).toBe(19);
  });

  test('lerp(1,10,-12) returns -107', () => {
    expect(lerp(1, 10, -12)).toBe(-107);
  });
});

describe('distance', () => {
  test('distance({angle:5,radius:50},{angle:10,radius:100}) returns 98.302...', () => {
    expect(distance({angle: 5, radius: 50}, {angle: 10, radius: 100}))
        .toBeCloseTo(98.30248290540649, 5);
  });

  test('distance({angle:5,radius:50},{angle:-10,radius:100}) returns 141.763...', () => {
    expect(distance({angle: 5, radius: 50}, {angle: -10, radius: 100}))
        .toBeCloseTo(141.76346189546945, 5);
  });
});

describe('toVector', () => {
  test('toVector({angle:5,radius:50}) returns {x:14.183...,y:-47.946...}', () => {
    const result = toVector({angle: 5, radius: 50});
    expect(result.x).toBeCloseTo(14.183109273161312, 5);
    expect(result.y).toBeCloseTo(-47.946213733156, 3);
  });
});

describe('normalize', () => {
  test('normalize({x:5,y:50}) returns {x:0.0995...,y:0.9950...}', () => {
    const result = normalize({x: 5, y: 50});
    expect(result.x).toBeCloseTo(0.09950371902099892, 5);
    expect(result.y).toBeCloseTo(0.9950371902099892, 5);
  });
});

describe('dot', () => {
  test('dot({x:5,y:50},{x:10,y:100}) returns 5050', () => {
    expect(dot({x: 5, y: 50}, {x: 10, y: 100})).toBe(5050);
  });
});

describe('add', () => {
  test('add({x:5,y:50},{x:10,y:100}) returns {x:15,y:150}', () => {
    expect(add({x: 5, y: 50}, {x: 10, y: 100})).toEqual({x: 15, y: 150});
  });
});

describe('subtract', () => {
  test('subtract({x:5,y:50},{x:10,y:100}) returns {x:-5,y:-50}', () => {
    expect(subtract({x: 5, y: 50}, {x: 10, y: 100})).toEqual({x: -5, y: -50});
  });
});
