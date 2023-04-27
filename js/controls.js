export function Controls ({
  changeBody,
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  forestOn,
  rainOn,
  coffeeOn,
  fireOn
}) {

  function light() {
    buttonLight.classList.toggle("hide");
    buttonDark.classList.toggle("hide");
    changeBody.classList.add("dark");
  }

  function dark() {
    buttonDark.classList.toggle("hide");
    buttonLight.classList.toggle("hide");
    changeBody.classList.remove("dark");
  }

  function play() {
    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
  }

  function pause() {
    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
  }

  function reset() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  };

  function coffee() {
    coffeeOn.classList.toggle("on");
    forestOn.classList.remove("on");
    fireOn.classList.remove("on");
    rainOn.classList.remove("on");
  };
  
  function forest() {
    forestOn.classList.toggle("on");
    fireOn.classList.remove("on");
    rainOn.classList.remove("on");
    coffeeOn.classList.remove("on");
  };

  function fire() {
    fireOn.classList.toggle("on");
    rainOn.classList.remove("on");
    coffeeOn.classList.remove("on");
    forestOn.classList.remove("on");
  };

  function rain() {
    rainOn.classList.toggle("on");
    coffeeOn.classList.remove("on");
    forestOn.classList.remove("on");
    fireOn.classList.remove("on");
  };

  return {
    light,
    dark,
    reset,
    play,
    pause,
    coffee,
    fire,
    forest,
    rain
  };
}