import { refs } from './js/refs';
import colors from './js/colors';
import { randomIntegerFromInterval } from './js/mathRandom';

const DELAY = 1000;
let timerId = null;

refs.btnStart.addEventListener('click', onClickStart);
refs.btnStop.addEventListener('click', onClickStop);

function addRandomBackgroundColor() {
let color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = color;
}

function onClickStart() {
  timerId = setInterval(() => {
  addRandomBackgroundColor()
  }, DELAY)
  refs.btnStart.setAttribute("disabled", "true");
}

function onClickStop() {
  clearInterval(timerId)
  refs.btnStart.removeAttribute("disabled");
}