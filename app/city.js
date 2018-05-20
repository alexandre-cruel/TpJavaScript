const {Divinity} = require('../app/divinity');
const {Units} = require('../app/units');

class City {
  constructor(cityName,divinityName) {
    this.name_ = cityName || 'UNKWNCITY';
    this.corn_ = 100;
    this.gold_ = 0;
    this.units = [];
    this.divinity = new Divinity(divinityName);
    this.nbChurch = 0;
  }

  init() {
    this.divinity.init();
    this.cityInterval_ = setInterval(() => {
      this.divinity.corn_ = this.divinity.corn + 1000;
      this.divinity.gold_ = this.divinity.gold + 1000;
      console.log(this.divinity.gold);
      console.log(this.divinity.corn);
    }, this.divinity.timeFactor);
  }
  // - - - - - - - - - - G E T T E R S - - - - - - - - - - - - - - - - - - - -

  get corn() {
    return this.corn_;
  }

  get gold() {
    return this.gold_;
  }

  get name() {
    return this.name_;
  }
  // - - - - - - - - - - T R A D I N G - - - - - - - - - - - - - - - - - - - -

  tradingCorn(amntOfCorn) {
    return new Promise((resolve, reject) => {
      if (typeof amntOfCorn === 'number') {
        setTimeout(() => {
          if (Math.random() < 0.70) {
            this.divinity.gold_ = (this.divinity.gold_ + 1.25) * amntOfCorn;
            console.log(
              `Your trader has done a great job you earn ${1.25 *
              amntOfCorn} gold ! `)
          } else {
            this.divinity.corn_ = this.divinity.corn_ - amntOfCorn;
            console.log(
              `Your trader has been killed on his way back home, you've lost ${
                amntOfCorn} corn ! `);
          }
        },this.timeFactor * Math.random()*0.3);
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

          }
          else {
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
              this.units.push(new Units());
            }
          }
        },this.divinity.timeFactor * 0.001 * qtyOfUnits);
      } else {
        reject(new Error(
          `you didn't give a number as the quantity of units to add to your 
          city, ${qtyOfUnits} isn't a number`
        ));
      }
    });
  }
  // - - - - - - - - - - B U I L D I N G S  - - - - - - - - - - - - - - - - -
  buyChurch() {
      if (this.gold >= 350) {
        setTimeout(()=> {
          this.nbChurch++; // Todo le nombre d'eglise boost la production de la ville
        },this.divinity.timeFactor * Math.random());
      } else {
        console.log('You don\'t have enough gold to buy a church');
      }
  }
  // - - - - - - - - - - C O M B A T S - - - - - - - - - - - - - - - - - - - -
  war(opponent){
    return new Promise((resolve, reject) => {
      if (typeof opponent === 'number'){
        //TODO Si puissance inférieure on ne peut pas attaquer
        setTimeout(()=>{
          this.units.forEach(this.units.fight());
        }, this.divinity.timeFactor * Math.random()*4000 + 2000);
        this.clearDeadUnits();
      } else {
        reject(new Error(`Erreur : ${opponent} isn't à number`));
      }
    })
  }

  clearDeadUnits() {
    this.units = this.units.filter(this.units.isDead_ == false);
  }
  // - - - - - - - - - - D E L E T E C I T Y - - - - - - - - - - - - - - - - -
  deleteCity(){
    clearInterval(this.cityInterval_);
  }
}
module.exports = {City};