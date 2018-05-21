const prompt = require('node-ask').prompt;
const confirm = require('node-ask').confirm;
const {City} = require('./app/city');

const game = async city1 => {
  let death = false;

  while (!death) {
    console.log('- - - - -  - - M E N U - - - - - - - - ');
    console.log('- - - -What\'s your next action ?- - - - ');
    console.log(' \t--> 1 : Sell some Corn ');
    console.log(' \t--> 2 : Buy some Corn ');
    console.log(' \t--> 3 : Buy new units ');
    console.log(' \t--> 4 : Build some church for god sake ');
    console.log(' \t--> 5 : THIS IS WAR (but that doesn\'t work yet)');
    console.log(' \t--> 6 : End the world');

    await prompt('What is your choice ? : ').then(
      async answer => {
        console.log('You have selected option ', answer);
        switch (answer) {
          case '1':
            console.log(
              `How many corn would you trade for gold ? Min:0 Max:${
                city1.corn}`);
            prompt('\n -->').then(
              async answer2 => {
                console.log(`You want to trade ${answer2} corn`);
                await city1.sellCorn(Number(answer2));
                return confirm('\n');
              });
            break;
          case '2':
            console.log(
              `How many gold would you trade for corn ? Min:0 Max:${
                city1.gold}`);
            prompt('\n -->').then(
              async answer2 => {
                console.log(`You want to trade ${answer2} gold`);
                await city1.buyCorn(Number(answer2));
                return confirm('\n');
              });
            break;
          case '3':
            console.log(
              `How many units would you like to create ? Min:0 Max:${Math.floor(
                city1.gold / 100)}`);
            prompt('\n -->').then(
              async answer2 => {
                console.log(`You want to create ${answer2} units`);
                await city1.addUnits(Number(answer2));
                return confirm('\n');
              });
            break;
          case '4':
            console.log(
              `How many churches you wanna buy ? Min:0 Max:${city1.gold /
              350}`);
            prompt('\n -->').then(
              async answer2 => {
                console.log(`You want to build ${answer2} church(es)`);
                await city1.buyChurch(Number(answer2));
                return confirm('\n');
              });
            break;
          case '5':
            console.log(`Get ready cause this is war !`);
            prompt('\n -->').then(
              async answer2 => {
                console.log(`Hello there`);
                await city1.war(Number(answer2));
                return confirm('\n');
              });
            break;
          case '6':
            console.log(`This is the end`);
            city1.deleteCity();
            death = true;
            break;
          default:
            console.log('Wrong choice, earth collapsed');
        }
        return confirm('');
      }
    );
  }
};

const main = async () => {
  const city1 = new City();
  city1.init();
  await game(city1);
};

main();
