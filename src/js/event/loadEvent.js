import { $ } from '../util/dom.js';

export const handleLoad = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  $('.stack-burger-animation4').addEventListener(
    'animationend',
    reloadScrollScreen,
  );
};

const reloadScrollScreen = () => {
  const pageHeight = window.innerHeight;
  window.scrollTo({ top: pageHeight, left: 0, behavior: 'smooth' });
};
