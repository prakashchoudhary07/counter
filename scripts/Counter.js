function counterManager(
  nodeReference,
  initilaValue,
  finalValue,
  animationTime = 3
) {
  const PRIME = 97;

  let incrementStepSize = Math.ceil(finalValue / (PRIME));

  let counterValue = initilaValue;

  interval = animationTime * 10;
  let i = 1;
  let x = setInterval(function () {
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
counterManager(subscribers, 0, 1000000);
