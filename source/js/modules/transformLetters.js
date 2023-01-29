export default (htmlElement, animationProperties = {}) => {
  let text = htmlElement.innerHTML;
  text = text.replace(/\s/g, ``);
  let strings = text.split(`<br>`);

  strings = strings.map((str) => Array.from(str)
    .map((letter) => `<span class="animated-letter">${letter}</span>`).join(``))
    .map((str) => `<span class="animated-string">${str}</span>`);

  text = strings.join(``);

  htmlElement.innerHTML = text;

  const duration = 500;
  const stringElements = Array.from(htmlElement.querySelectorAll(`.animated-string`));

  let totalDelay = animationProperties.totalDelay ? animationProperties.totalDelay : 0;

  if (animationProperties.delayTime) {
    for (let j = 0; j < stringElements.length; j++) {
      const lettersElements = Array.from(stringElements[j].querySelectorAll(`.animated-letter`));

      for (let i = 0; i < lettersElements.length; i++) {
        const delay = animationProperties.delayTime[j][i];
        const element = lettersElements[i];

        element.style.animationDelay = (delay * 100) + (j * duration) + totalDelay + `ms`;
      }
    }
  }
};
