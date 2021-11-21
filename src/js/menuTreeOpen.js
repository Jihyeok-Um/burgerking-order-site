const wholeenuTree = document.querySelectorAll(".menu-tree-class-for-toggle");

$(".menu-icon").addEventListener("click", () => {
     for (let i=0; i < menuTree.length; i++) {
          wholeenuTree[i].classList.toggle("is-active");
     }
     $("header").classList.toggle("is-active");
});