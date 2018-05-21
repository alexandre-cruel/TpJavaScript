const {Divinity} = require('../app/divinity');
const {Units} = require('../app/units');

class City {
  constructor(cityName, divinityName) {
    this.name_ = cityName || 'UNKWNCITY';
    this.units = [];
    this.divinity = new Divinity(divinityName);
    this.nbChurch = 0;
    this.isCityDead = false;
  }

  init() {
    this.divinity.init();
    this.cityInterval_ = setInterval(() => {
      this.divinity.corn_ = this.divinity.corn + 1000;
      this.divinity.gold_ = this.divinity.gold + 1000;
      // console.log(this.divinity.gold);
      // console.log(this.divinity.corn);
    }, this.divinity.timeFactor);
  }
  // - - - - - - - - - - G E T T E R S - - - - - - - - - - - - - - - - - - - -

  get gold() {
    return this.divinity.gold;
  }

  get corn() {
    return this.divinity.corn;
  }

  get name() {
    return this.name_;
  }
  // - - - - - - - - - - T R A D I N G - - - - - - - - - - - - - - - - - - - -

  sellCorn(amntOfCorn) {
    return new Promise((resolve, reject) => {
      if (typeof amntOfCorn === 'number') {
        setTimeout(() => {
          if (Math.random() < 0.70) {
            this.divinity.gold_ = (this.divinity.gold_ + 1.25) * amntOfCorn;
            console.log(
              `Well done, you earn ${1.25 * amntOfCorn} gold ! `);
          } else {
            this.divinity.corn_ = this.divinity.corn_ - amntOfCorn;
            console.log(
              `Your trader has been killed you've lost ${amntOfCorn} corn ! `);
          }
        }, this.divinity.timeFactor * Math.random() * 0.3);
      } else {
        reject(new Error(
          `You didn't give a number as the amount to trade : ${
            amntOfCorn} is not a number`
        ));
      }
    });
  }

  buyCorn(amntOfGold) { // TODO Check on a pas assé de ressources
    return new Promise((resolve, reject) => {
      if (typeof amntOfGold === 'number') {
        setTimeout(() => {
          if (Math.random() < 0.85) {
            this.divinity.corn_ = this.divinity.corn + (0.9 * amntOfGold);
            console.log(`Everything is fine`);
          } else {
            this.divinity.gold_ = this.divinity.gold - amntOfGold;
            console.log(`Crap ! You've lost ${amntOfGold} gold`);
          }
        }, this.divinity.timeFactor * Math.random() * 0.1);
      } else {
        reject(new Error(
          `You didn't give a number as the amount of gold to spend : ${
            amntOfGold} is not a number`
        ));
      }
    });
  }

  addUnits(qtyOfUnits) {
    return new Promise((resolve, reject) => {
      if (typeof qtyOfUnits === 'number') {
        setTimeout(() => {
          for (let i = 0; i <= qtyOfUnits; i++) {
            if (this.divinity.gold < 100 || this.divinity.corn < 50) {
              console.log(
                `You can't create units, you only have ${this.divinity.gold} 
                gold and ${this.divinity.corn} corn left`);
            } else {
              this.divinity.gold_ = this.divinity.gold - 100;
              this.divinity.corn_ = this.divinity.corn - 50;
              this.units.push(new Units());
            }
          }
        }, this.divinity.timeFactor * 0.001 * qtyOfUnits);
      } else {
        reject(new Error(
          `you didn't give a number as the quantity of units to add to your 
          city, ${qtyOfUnits} isn't a number`
        ));
      }
    });
  }
  // - - - - - - - - - - B U I L D I N G S  - - - - - - - - - - - - - - - - -
  // Todo le nombre d'eglise boost la production de la ville

  buyChurch(qtyToBuild) {
    if (this.divinity.gold >= 350 * qtyToBuild) {
      setTimeout(() => {
        this.divinity.gold_ = this.divinity.gold - 350;
        this.nbChurch = this.nbChurch + qtyToBuild;
      }, this.divinity.timeFactor * Math.random());
    } else {
      console.log('You don\'t have enough gold to buy a church');
    }
  }
  // - - - - - - - - - - C O M B A T S - - - - - - - - - - - - - - - - - - - -

  war(opponent) {
    return new Promise((resolve, reject) => {
      if (typeof opponent === 'number') {
        // TODO Si puissance inférieure on ne peut pas attaquer
        setTimeout(() => {
          this.units.forEach(this.units.fight());
        }, (this.divinity.timeFactor * Math.random() * 4000) + 2000);
        this.clearDeadUnits();
      } else {
        reject(new Error(`Erreur : ${opponent} isn't à number`));
      }
    });
  }

  clearDeadUnits() {
    this.units = this.units.filter(this.units.isDead === false);
  }

  healunits() {
    this.units.forEach(/* Dépenser du corn pour soigner les troupes */);
  }
  // - - - - - - - - - - D E L E T E C I T Y - - - - - - - - - - - - - - - - -

  deleteCity() {
    clearInterval(this.cityInterval_);
  }
}
module.exports = {City};
