window.onload = function(){
    const menuEmoji = document.querySelector(".menu-icon");
    console.log("work1");

    function toggleMenuAndX(event){
        console.log("work2");
         menuEmoji.classList.toggle("is-active");
    }

    menuEmoji.addEventListener("click", toggleMenuAndX);
}