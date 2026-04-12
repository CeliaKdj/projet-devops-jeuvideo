// fihcier pour importer les fonctions de mathUtils.js pour verifier leur valeurs
import { expect } from 'chai';
// import pour math.js:
import { lerp, mapLinear, randFloatSpread } from '../src/math.js';
// import pour utils.js:
import { flow, rearg, remove, sample } from '../src/utils.js';

// test pour Math.js
describe("Math", function () {
    describe('randFloatSpread()', function(){
        it("shoul return a value between -1 and 1 for randFloatSpread(1)", function(){
            const result = randFloatSpread(1);
            // randFloatSpread(1) <= 1 returns true
            expect(result).to.be.at.least(-1);
            // randFloatSpread(1) >= -1 returns true
            expect(result).to.be.at.most(1);
        })
    })
    describe('lerp()', function(){
        it("should return 41 for lerp(1, 3, 20)", function() {
            expect(lerp(1, 3, 20)).to.equal(41);
        });
        it("should return -15.3 for lerp(1.3,-7,2)", function(){
            expect(lerp(1.3,-7,2)).to.equal(-15.3)
        })
    });
    describe('mapLinear()', function(){
        it("should return 3 for mapLinear(1,2,3,4,5)", function() {
            expect(mapLinear(1,2,3,4,5)).to.equal(3)
        });
        it("should return 0.882352941176471 for mapLinear(0.882352941176471)", function(){
            expect(mapLinear(1,20,3,40,5)).to.be.closeTo(0.882352941176471, 0.000001)
        })
    })
});
