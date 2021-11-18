const menuEmoji = document.querySelector(".menu-icon");
const menu = document.querySelector(".home__menu");

function toggleMenuAndX(event){
     menuEmoji.classList.toggle("is-active");
     menu.classList.toggle("is-active");
}

menuEmoji.addEventListener("click", toggleMenuAndX);