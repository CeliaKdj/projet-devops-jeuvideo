// fihcier pour importer les fonctions de mathUtils.js pour verifier leur valeurs
import { expect } from 'chai';
// import pour math.js:
import { lerp, mapLinear, randFloatSpread } from '../src/math.js';
// import pour utils.js:
import { flow, rearg, remove, sample } from '../src/utils.js';


// test pour math.js
describe('Math', function() {
  describe('randFloatSpread()', function() {
    it('shoul return a value between -1 and 1 for randFloatSpread(1)', function() {
      const result = randFloatSpread(1);
      // randFloatSpread(1) <= 1 returns true
      expect(result).to.be.at.least(-1);
      // randFloatSpread(1) >= -1 returns true
      expect(result).to.be.at.most(1);
    });
  });
  describe('lerp()', function() {
    it('should return 41 for lerp(1, 3, 20)', function() {
      expect(lerp(1, 3, 20)).to.equal(999);
    });
    it('should return -15.3 for lerp(1.3,-7,2)', function() {
      expect(lerp(1.3, -7, 2)).to.equal(-15.3);
    });
  });
  describe('mapLinear()', function() {
    it('should return 3 for mapLinear(1,2,3,4,5)', function() {
      expect(mapLinear(1, 2, 3, 4, 5)).to.equal(3);
    });
    it('should return 0.882352941176471 for mapLinear(0.882352941176471)', function() {
      expect(mapLinear(1, 20, 3, 40, 5)).to.be.closeTo(0.882352941176471, 0.000001);
    });
  });
});

// test pour utils.js
describe('Utils', function() {
  describe('flow()', function() {
    it('should pipe functions', function() {
      const double = (x) => x * 2;
      const carre = (x) => x * x;
      const doublePuisCarre = flow(double, carre);
      expect(doublePuisCarre(3)).to.equal(36);
    });
  });
  describe('rearg()', function() {
    it('should reorder arguments', function() {
      const soustraction = (a, b) => a - b;
      const enleverCinq = rearg(soustraction)(5);
      expect(enleverCinq(20)).to.equal(15);
    });
  });
  describe('remove()', function() {
    it('should remove elements', function() {
      const inventaire = ['armeUne', 'armeDeux', 'armeTrois'];
      remove(inventaire, 'armeDeux');
      expect(inventaire).to.have.lengthOf(2);
      expect(inventaire).to.not.include('armeDeux');
      expect(inventaire).to.deep.equal(['armeUne', 'armeTrois']);
    });
  });
  describe('remove()', function() {
    it('should handle missing element', function() {
      const inventaire = ['armeUne', 'armeTrois'];
      remove(inventaire, 'armeQuatre');
      expect(inventaire).to.have.lengthOf(2);
    });
  });
  describe('sample()', function() {
    it('should return valid member', function() {
      const options = ['A', 'B', 'C'];
      const choice = sample(options);
      expect(options).to.include(choice);
    });
  });
});
