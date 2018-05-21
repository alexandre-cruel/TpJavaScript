const prompt = require('node-ask').prompt;
const confirm = require('node-ask').confirm;
const {City} = require('./app/city');

const city1 = new City();
city1.init();

// TODO async await le menu
// While (city1.isCityDead == false) {

console.log('- - - - -  - - M E N U - - - - - - - - ');
console.log('- - - -What\'s your next action ?- - - - ');
console.log(' \t--> 1 : Sell some Corn ');
console.log(' \t--> 2 : Buy some Corn ');
console.log(' \t--> 3 : Buy new units ');
console.log(' \t--> 4 : Build some church for god sake ');
console.log(' \t--> 5 : THIS IS WAR (but that doesn\'t work yet)');

a = false;
while (!a ) {
  prompt('What is your choice ? : ').then(
    function (answer) {
      console.log('You have selected option ', answer);
      switch (answer) {
        case '1':
          console.log(
            `How many corn would you trade for gold ? Min:0 Max:${
              city1.divinity.corn}`);
          prompt('\n -->').then(
            function (answer2) {
              console.log(`You want to trade ${answer2} corn`);
              city1.sellCorn(Number(answer2));
              return confirm('\n');
            });
          break;
        case '2':
          console.log(
            `How many gold would you trade for corn ? Min:0 Max:${
              city1.divinity.gold}`);
          prompt('\n -->').then(
            function (answer2) {
              console.log(`You want to trade ${answer2} gold`);
              city1.buyCorn(Number(answer2));
              return confirm('\n');
            });
          break;
        case '3':
          console.log(
            `How many units would you like to create ? Min:0 Max:${Math.floor(
              city1.divinity.gold / 100)}`);
          prompt('\n -->').then(
            function (answer2) {
              console.log(`You want to create ${answer2} units`);
              city1.addUnits(Number(answer2));
              return confirm('\n');
            });
          break;
        case '4':
          console.log(
            `How many churches you wanna buy ? Min:0 Max:${city1.divinity.gold /
            350}`);
          prompt('\n -->').then(
            function (answer2) {
              console.log(`You want to build ${answer2} church(es)`);
              city1.buyChurch(Number(answer2));
              return confirm('\n');
            });
          break;
        case '5':
          console.log(`Get ready cause this is war !`); // TODO Qu'es ce que
          // L'utilisateur rentre ?
          prompt('\n -->').then(
            function (answer2) {
              console.log(`Hello there`);
              city1.war(Number(answer2));
              return confirm('\n');
            });
          break;
        default:
          console.log(' Wrong choice, earth collapsed');
      }
      return confirm('');
    }
  );
}

// }

