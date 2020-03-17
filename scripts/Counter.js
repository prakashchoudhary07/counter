const COUNTER_INITIAL_VALUE = 10;
const MAX_COUNTER_LIMIT = 9009;

const SPEED = 100;

let interval = 100;

let incrementStepSize = Math.floor(MAX_COUNTER_LIMIT / SPEED) + 1;

let counterValue = COUNTER_INITIAL_VALUE;

let counter = document.getElementById('counter');

let x = setInterval(function() {
  counterValue += incrementStepSize;
  if (counterValue > MAX_COUNTER_LIMIT) {
    counterValue = MAX_COUNTER_LIMIT;
    clearInterval(x);
  }
  counter.innerHTML = counterValue;
}, interval);
