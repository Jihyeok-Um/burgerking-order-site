const wholeMenuTree = document.querySelectorAll(".menu-tree-class-for-toggle");

$(".menu-icon").addEventListener("click", () => {
     for (let i=0; i < wholeMenuTree.length; i++) {
          wholeMenuTree[i].classList.toggle("is-active");
     }
     $("header").classList.toggle("is-active");
});