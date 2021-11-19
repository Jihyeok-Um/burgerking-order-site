window.onresize = function () {
    section = document.querySelectorAll(".section");
    section.innerHeight = window.innerHeight;
    const pageHeight = window.innerHeight;
    window.scrollTo({top:pageHeight, left:0, behavior:'auto'});
    console.log(section.innerHeight);
}