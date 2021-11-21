window.onload = function () {
    setTimeout(function () {
        window.scrollTo(0, 0);
    },100);
    setTimeout(function(){
        const pageHeight = window.innerHeight;
        window.scrollTo({top:pageHeight, left:0, behavior:'smooth'});
        curPage++;
    },2500)
}