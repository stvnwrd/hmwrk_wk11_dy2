var Park = function () {
  this.dinos = [];
}

Park.prototype.addDino = function (dino) {
  this.dinos.push(dino)
};

Park.prototype.removeDino = function (type) {

  for (i = this.dinos.length - 1; i >= 0; --i) {
    if (this.dinos[i].type === type) {
      this.dinos.splice(i, 1);
    }
  }
};

Park.prototype.findDinoWithOverTwoOffspring = function () {
 const result = this.dinos.filter(dino => dino.offspringPerYear > 2);
 return result;
};

module.exports = Park;
