import { handleClick } from './events/clickEvent.js';
import { reloadScrollScreen } from './events/loadEvent.js';
import { handleScroll } from './events/scrollEvent.js';

function App() {
  let currentPage = 0;

  window.addEventListener('load', reloadScrollScreen);
  window.addEventListener('click', handleClick);
  window.addEventListener('wheel', e => {
    currentPage = handleScroll(e, currentPage);
  });
}

new App();
