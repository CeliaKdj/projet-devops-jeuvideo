// test qui verifie que le jeu demarre bien dans le bon état
const assert = require('assert');
const Game = require('../src/game.js');

describe('Test Fonctionnel : Initialisation', function(){
    it('Le jeu doit commencer à l\état "MENU"', function(){
        const myGame = new Game();
        assert.strictEqual(myGame.state, 'MENU');
    })
})

// test fin de la partie
describe('Test Fonctionnel : Fin de partie', function(){
    it('Le jeu doit passer en "GAMEOVER" quand la vie vie atteint 0', function(){
        const myGame = new Game();
        myGame.start();

        myGame.takeDamage(100);

        assert.strictEqual(myGame.state, 'GAMEOVER');
    })
})