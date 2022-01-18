import { $ } from '../utils/dom.js';
import { X, Y, DELAY_MILLISECOND } from '../constants/constant.js';

export const reloadScrollScreen = () => {
  const pageHeight = window.innerHeight;
  const stackBurgetAnimation = $('.stack-burger-animation4');

  setTimeout(() => {
    window.scrollTo(X, Y);
  }, DELAY_MILLISECOND);
  if (stackBurgetAnimation === null) {
    return;
  }
  stackBurgetAnimation.addEventListener('animationend', () => {
    window.scrollTo({ top: pageHeight, left: X, behavior: 'smooth' });
  });
};
