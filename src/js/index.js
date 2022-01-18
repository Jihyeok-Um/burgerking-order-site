import { $ } from './util/dom.js';
import { handleClick } from './event/clickEvent.js';

function App() {
  $('body').addEventListener('click', handleClick);
}

const app = new App();
