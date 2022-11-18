export default (htmlElement, animationProperties = {}) => {
  let text = htmlElement.textContent;
  let words = text.split(` `);

  words = words.map((word) => Array.from(word)
    .map((letter) => `<span class="animated-letter">${letter}</span>`).join(``))
    .map((word) => `<span class="animated-string">${word}</span>`);

  text = words.join(``);

  htmlElement.innerHTML = text;

  const duration = 0.5;
  const stringElements = Array.from(htmlElement.querySelectorAll(`.animated-string`));

  if (animationProperties.delayTime) {
    for (let j = 0; j < stringElements.length; j++) {
      const lettersElements = Array.from(stringElements[j].querySelectorAll(`.animated-letter`));

      for (let i = 0; i < lettersElements.length; i++) {
        const delay = animationProperties.delayTime[j][i];
        const element = lettersElements[i];

        element.style.animationDelay = (delay * 0.1) + (j * duration) + `s`;
      }
    }
  }
};
