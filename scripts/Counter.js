function counterManager(
  nodeReference,
  initilaValue,
  finalValue,
  interval = 10
) {
  const PRIME = 97;

  let incrementStepSize = Math.ceil(finalValue / PRIME);

  let counterValue = initilaValue;

  let x = setInterval(function() {
    counterValue += incrementStepSize;
    if (counterValue > finalValue) {
      counterValue = finalValue;
      clearInterval(x);
    }
    nodeReference.innerText = counterValue;
  }, interval);
}

const likes = document.getElementById('likes');
counterManager(likes, 20, 99999999999);

const subscribers = document.getElementById('subscribers');
counterManager(subscribers, 0, 1000000, 10);
