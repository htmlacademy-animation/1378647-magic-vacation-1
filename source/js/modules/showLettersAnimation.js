import transformLetters from './transformLetters';

export default () => {
  transformLetters(document.querySelector(`.intro__title`), {
    delayTime: [[2, 1, 0, 1, 2, 1, 0, 3, 1, 0, 1, 0], [1, 2, 1, 0, 1, 0]]
  });

  document.body.addEventListener(`screenChanged`, (e) => {
    const {screenElement, screenName} = e.detail;
    const headerAnimated = screenElement.querySelector(`.${screenName}__title`) || screenElement.querySelector(`.slider__item-title`);

    if (headerAnimated) {
      let delayTime = [];

      switch (screenName) {
        case `story`:
          delayTime.push([2, 1, 0, 1, 2, 1, 0]);
          break;
        case `prizes`:
          delayTime.push([2, 1, 0, 1, 2]);
          break;
        case `rules`:
          delayTime.push([3, 2, 1, 0, 2, 1, 0]);
          break;
        case `game`:
          delayTime.push([2, 1, 0, 1]);
          break;
        default:
          break;
      }

      transformLetters(headerAnimated, {
        delayTime
      });
    }
  });
};
