import { $ } from './util/dom.js';
import { handleClick } from './event/clickEvent.js';
import { handleLoad } from './event/loadEvent.js';

function App() {
  window.addEventListener('load', handleLoad);
  window.addEventListener('click', handleClick);
}

const app = new App();
