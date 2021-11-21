function reloadScrollScreen(){
    const pageHeight = window.innerHeight;
    window.scrollTo({top:pageHeight, left:0, behavior:'smooth'});
    curPage++;
}
window.onload = () => {
    console.log("work");
    setTimeout(() => {window.scrollTo(0, 0)},100);
    window.setTimeout(reloadScrollScreen,2500);
}