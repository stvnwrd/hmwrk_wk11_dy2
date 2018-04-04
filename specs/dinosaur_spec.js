var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  var dinosaur;

  beforeEach(function () {
    dinosaur1 = new Dinosaur({type: 'Triceratops', offspringPerYear: 3});
  });

  it('should have a type', function () {
    assert.strictEqual(dinosaur1.type, 'Triceratops');
  });

  it('should have a number of offspring per year', function () {
    assert.strictEqual(dinosaur1.offspringPerYear, 3);
  });

});
