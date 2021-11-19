window.onload = function () {
    setTimeout(function () {
        window.scrollTo(0, 0);
    },1);
    setTimeout(function(){
        const pageHeight = window.innerHeight;
        window.scrollTo({top:pageHeight, left:0, behavior:'smooth'});
    },2500)

}