<h1> Seven Wonder in JS </h1>

<p>Our goal was to create a game in which you can manage a city, it ressources 
( corn and gold )and it units. There were <strong>three</strong> main things to focus on :
</p>

* Trading resources
* Fight against other cities
* Blessings from the divinity

<h3> Table of content </h3>

  * Install the game
  * How to play
    * The city
    * The divinity
    * The units
    * Tradings
  * Check the code style  [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
  * Dev team

<h3>Install the game</h3>

```
git clone https://github.com/gr1tch32/TpJavaScript
cd TpJavaScript
yarn install
yarn start
```
This will download the game from this repository. Yarn will manage the packages 
that we used for this project. 

<h3>How to play</h3>

<h4>The city</h4>

<strong>The city</strong> ( managed by the file _city.js_) is the core of game. 
you have to keep enough force and resources inside of it to counter assault from
 opponents. 

<h4>The city</h4>

<strong>The divinity</strong> belongs to your city. It could increase you 
resources or punish your city (beware of sinners).

<h4>The units</h4>

<strong>The units</strong> are the military force of your city. Keep enough 
troops may be a good idea if you don't wan't to die in the early game. 

<h4>Tradings</h4>

<strong>Tradings</strong> are a very powerful way to increase your ressources. 
If you are lucky enough your traders will always come back home, but sometimes 
things get complicated


<h3>Code style [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)          </h3>

In this project we've used a linter called XO. It checks if the code is 
correctly indented and is perfectly readable. 

You can check it by yourself using the following command in the terminal : 

```
xo
```

<h3>Dev team</h3>

* Alexandre Cruel   Branleur 1
* Raphaël Champeaud     Branleur 2 <3
* Baptiste Chevallier
