const menuEmoji = document.querySelector(".menu-icon");
const menu = document.querySelector(".home__menu");
const menuList = document.querySelectorAll(".home__menu__list");
const header = document.querySelector("header");

function toggleMenuAndX(event){
     menuEmoji.classList.toggle("is-active");
     menu.classList.toggle("is-active");
     header.classList.toggle("is-active");
     for (let i=0; i < menuList.length; i++) {
          menuList[i].classList.toggle("is-active");
     }
}

menuEmoji.addEventListener("click", toggleMenuAndX);