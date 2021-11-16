window.onbeforeunload = function () {
    window.scrollTo(0,0);
}

window.onload = function () {
    const pageHeight = window.innerHeight;
    setTimeout(function(){
        window.scrollTo({top:pageHeight, left:0, behavior:'smooth'});
        console.log(pageHeight);
    },2500)

}