var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');
var assert = require('assert');

describe('Park', function () {

  var park;
  var dinosaur1;
  var dinosaur2;

  beforeEach(function () {
    park = new Park();
    dinosaur1 = new Dinosaur({type: 'Triceratops', offspringPerYear: 3});
    dinosaur2 = new Dinosaur({type: 'Tyrannosaurus', offspringPerYear: 2});
  });

  it('should have no dinosaurs initially', function () {
    assert.strictEqual(park.dinos.length, 0);
  });

  it('should be able to add dinosaur to park', function () {
    park.addDino(dinosaur1);
    assert.strictEqual(park.dinos.length, 1);
  });

  it('should be able to remove all dinos of specific type', function () {
    park.addDino(dinosaur1);
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.removeDino('Triceratops');
    assert.strictEqual(park.dinos.length, 1);
  });

  it('should get all the dinos with offspring count of more than two', function () {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    assert.deepEqual(park.findDinoWithOverTwoOffspring(), [dinosaur1]);
  })


});
