const menuEmoji = document.querySelector(".menu-icon");
const menuTree = document.querySelector(".menu-tree");
const menuTreeList = document.querySelectorAll(".menu-tree-list");
const header = document.querySelector("header");

function toggleMenuAndX(event){
     menuEmoji.classList.toggle("is-active");
     menuTree.classList.toggle("is-active");
     header.classList.toggle("is-active");
     for (let i=0; i < menuTreeList.length; i++) {
          menuTreeList[i].classList.toggle("is-active");
     }
}

menuEmoji.addEventListener("click", toggleMenuAndX);