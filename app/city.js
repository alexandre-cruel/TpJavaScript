const {Divinity} = require('../app/divinity');
const {Units} = require('../app/units');

class City {

  constructor() {
    this.corn_ = 100;
    this.gold_ = 0;
    this.units = [];
    this.timeFactor_ = 365; // 1 an
  }

  init(){
    this.cityInterval_ = setInterval(()=> {

      // Ajout de ressources chaque années ?
    },this.timeFactor);
  }

  get corn() {
    return this.corn_;
  }

  get gold() {
    return this.gold_;
  }

  get timeFactor() {
    return this.timeFactor_;
  }


  tradingCorn(amntOfCorn) {
    return new Promise((resolve, reject) => {
      if (typeof amntOfCorn === 'number') {
        setTimeout(() => {
          if (Math.random() < 0.70) {
            this.gold = this.gold + 1.25 * amntOfCorn;
            console.log(
              `Your trader ${idTrader} has done a great job you earn ${1.25 *
              amntOfCorn} gold ! `)
          } else {
            this.corn = this.corn - amntOfCorn;
            console.log(
              `Your trader has been killed on his way back home, you've lost ${
                amntOfCorn} corn ! `);
          }
        },this.timeFactor * Math.random()*0.3); // ça prends entre 0 et 110jours
      } else {
        reject(new Error(
          `You didn't give a number as the amount to trade : ${
            amntOfCorn} is not a number`
        ));
      }
    });
  }

  buyCorn(amntOfGold) {
    return new Promise((resolve, reject) => {
      if (typeof amntOfGold === 'number') {
        setTimeout(()=> {
          if (Math.random() < 0.85) {
            this.corn = this.corn + 0.9 * amntOfGold;
            console.log(`Nicely done ! Your trader came back with ${0.9 *
            amntOfGold}corn for the ${amntOfGold} gold you spent`);

          } else {
            this.gold = this.gold - amntOfGold;
            console.log(
              `Your trader has been robed, you've lost ${amntOfGold} gold`);
          }
        },this.timeFactor * Math.random() * 0.1);
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
        setTimeout(()=> {
          for (let i = 0; i <= qtyOfUnits; i++) {
            if (this.gold < 100 || this.corn < 50) {
              console.log(
                `You can't create units, you only have ${this.gold} gold and ${
                  this.corn} corn left`)
            } else {
              this.gold = this.gold - 100;
              this.corn = this.corn - 50;
              this.units.push(new Units);
            }
          } //Petit test pour voir si ça à bien marché à base de check de status
        },this.timeFactor * Math.random() * 0.001 * qtyOfUnits);
      } else {
        reject(new Error(
          `you didn't give a number as the quantity of units to add to your 
          city, ${qtyOfUnits} isn't a number`
        ));
      }
    });
  }

  deleteCity(){
    clearInterval(this.cityInterval_);
  }

}

module.exports = {City};