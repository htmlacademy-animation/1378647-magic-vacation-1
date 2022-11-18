import transformLetters from './transformLetters';

export default () => {
  transformLetters(document.querySelector(`.intro__title`), {
    delayTime: [[2, 1, 0, 1, 2, 1, 0, 3, 1, 0, 1, 0], [1, 2, 1, 0, 1, 0]]
  });
};
