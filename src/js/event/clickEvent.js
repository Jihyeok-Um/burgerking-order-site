import { $ } from '../util/dom.js';

export const handleClick = e => {
  switch (e.target.id) {
    case 'menu-icon':
      menuTreeToggle();
  }
};

const menuTreeToggle = () => {
  const menuTree = document.querySelectorAll('.menu-tree-class-for-toggle');
  $('header').classList.toggle('is-active');
  for (let i = 0; i < menuTree.length; i++) {
    menuTree[i].classList.toggle('is-active');
  }
};
