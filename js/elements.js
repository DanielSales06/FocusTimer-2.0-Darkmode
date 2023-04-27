const changeBody = document.querySelector("body");
const buttonLight = document.querySelector(".sun");
const buttonDark = document.querySelector(".moon");

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonAdd = document.querySelector(".add");
const buttonDecrease = document.querySelector(".decrease");

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const forestOn = document.querySelector(".forest");
const rainOn = document.querySelector(".rain");
const coffeeOn = document.querySelector(".coffee");
const fireOn = document.querySelector(".fire");

const buttonForest = document.querySelector(".buttonForest");
const buttonRain = document.querySelector(".buttonRain");
const buttonCoffee = document.querySelector(".buttonCoffee");
const buttonFire = document.querySelector(".buttonFire");

const volumeForest = document.querySelector("#buttonForest"); 
const volumeRain = document.querySelector("#buttonRain");
const volumeCoffee = document.querySelector("#buttonCoffee");
const volumeFire = document.querySelector("#buttonFire");

export {
  changeBody,
  buttonLight,
  buttonDark,

  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonDecrease,

  minutesDisplay,
  secondsDisplay,

  forestOn,
  rainOn,
  coffeeOn,
  fireOn,

  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
  
  volumeForest,
  volumeCoffee,
  volumeRain,
  volumeFire
}