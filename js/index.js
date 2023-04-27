import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Sounds } from "./sounds.js";
import { Events } from "./events.js";

import {
  changeBody,
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay,
  forestOn,
  rainOn,
  coffeeOn,
  fireOn
} from "./elements.js";

const controls = Controls ({
  changeBody,
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  forestOn,
  rainOn,
  coffeeOn,
  fireOn
});

const timer = Timer ({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
});

const sounds = Sounds();

Events({controls, timer, sounds});