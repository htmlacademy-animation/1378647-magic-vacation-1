export default (htmlElement, animationProperties) => {
  let text = htmlElement.textContent;
  let words = text.split(` `);

  words = words.map((word) => Array.from(word)
    .map((letter) => `<span class="animated-letter">${letter}</span>`).join(``))
    .map((word) => `<span class="animated-string">${word}</span>`);

  text = words.join(``);

  htmlElement.innerHTML = text;

  const lettersElements = Array.from(htmlElement.querySelectorAll(`.animated-letter`));

  lettersElements.forEach((element) => {
    element.style.animationDelay = (0.5 * Math.random()) + 's';
  });
};
