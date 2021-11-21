const menuTree = document.querySelectorAll(".menu-tree-class-for-toggle");

$(".menu-icon").addEventListener("click", () => {
     for (let i=0; i < menuTree.length; i++) {
          menuTree[i].classList.toggle("is-active");
     }
     $("header").classList.toggle("is-active");
});