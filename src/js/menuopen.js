const menuEmoji = document.querySelector(".menu-icon");

function toggleMenuAndX(event){
     menuEmoji.classList.toggle("is-active");
}

menuEmoji.addEventListener("click", toggleMenuAndX);