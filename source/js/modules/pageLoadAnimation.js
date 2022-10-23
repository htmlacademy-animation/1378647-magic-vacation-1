export default () => {
  const showPageLoadAnimation = () => {
    const body = document.querySelector(`body`);
    body.classList.add(`loaded`);
  };

  window.addEventListener(`load`, showPageLoadAnimation);
};
