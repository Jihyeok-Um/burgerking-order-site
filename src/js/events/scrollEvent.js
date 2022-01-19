import { X, DELTA_Y_BOUNDARY, FIRST_PAGE } from '../constants/constant.js';
import { $ } from '../utils/dom.js';

export const handleScroll = (e, currentPage) => {
  if ($('.home-header') === null) {
    return;
  }
  const lastPage = document.querySelectorAll('.section').length;

  if (e.deltaY > DELTA_Y_BOUNDARY && currentPage < lastPage) {
    currentPage++;
  } else if (e.deltaY < DELTA_Y_BOUNDARY && currentPage > FIRST_PAGE) {
    currentPage--;
  }

  scrollScreen(currentPage);
  return currentPage;
};

export const scrollScreen = currentPage => {
  if ($('.menu-tree').classList.contains('is-active')) {
    return;
  }
  const pageHeight = window.innerHeight;
  window.scrollTo({
    top: currentPage * pageHeight,
    left: X,
    behavior: 'smooth',
  });
};
