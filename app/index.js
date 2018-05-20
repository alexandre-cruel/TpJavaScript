const {City} = require('./city');
const prompt = require('node-ask').prompt;
const confirm = require('node-ask').confirm;
const multiline = require('node-ask').multiline;


let paris = new City();
paris.init();

death = false;
//while (death != true) {

  console.log("- - - - -  - - M E N U - - - - - - - - ");
  console.log("- - - -What's your next action ?- - - - ");
  prompt('What is your choice ? : ').then(
    function(answer) {
      console.log('You have selected option ', answer);
//HERE
      return confirm('');
    }
  );

//}

switch (answer) {
  case "1":
    console.log("Oranges : 0.59 € le kilo.");
    break;
  case "2":
    console.log("Pommes : 0.32 € le kilo.");
    break;
  case "3":
    console.log("Bananes : 0.48 € le kilo.");
    break;
  case "4":
    console.log("Cerises : 3.00 € le kilo.");
    break;
  case "Mangues":
  case "Papayes":
    console.log("Mangues et papayes : 2.79 € le kilo.");
    break;
  default:
    console.log("Wrong choice, earth collapsed");
}