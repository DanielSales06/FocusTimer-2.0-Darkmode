import {
  buttonLight,
  buttonDark,

  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonDecrease,

  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,

  forestOn,
  rainOn,
  coffeeOn,
  fireOn
} from "./elements.js";

export function Events({controls, timer, sounds}) {
  
  buttonDark.addEventListener("click" , function() {
    controls.dark();
  });

  buttonLight.addEventListener("click", function() {
    controls.light();
  });

  buttonPlay.addEventListener("click", function() {
    controls.play();
    timer.countdown();
    sounds.pressButton();
  });

  buttonPause.addEventListener("click", function() {
    controls.pause();
    timer.pause();
  });

  buttonStop.addEventListener("click", function() {
    controls.reset();
    timer.reset();
    sounds.pressButton();
  });

  buttonAdd.addEventListener("click", function() {
    timer.addMinutes();
  });
  
  buttonDecrease.addEventListener("click", function() {
    timer.decreaseMinutes();
  });

  buttonCoffee.addEventListener("click", function() {
    controls.coffee();
    sounds.coffeePlay();
  });
  coffeeOn.addEventListener("input", sounds.setAudioVolume);

  buttonForest.addEventListener("click", function() {
    controls.forest();
    sounds.forestPlay();
  });
  forestOn.addEventListener("input", sounds.setAudioVolume);

  buttonRain.addEventListener("click", function() {
    controls.rain();
    sounds.rainPlay();
  });
  rainOn.addEventListener("input", sounds.setAudioVolume);

  buttonFire.addEventListener("click", function() {
    controls.fire();
    sounds.firePlay();
  });
  fireOn.addEventListener("input", sounds.setAudioVolume);
}