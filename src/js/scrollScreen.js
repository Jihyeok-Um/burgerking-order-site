const page = document.querySelectorAll('.section');
const lastPage = page.length;
let curPage = 1;
let curHeight = 0;

function scroll(event) {
  const pageHeight = window.innerHeight;
  if (event.deltaY > 0 && curPage < lastPage) {
    curHeight += pageHeight;
    window.scrollTo({top:curHeight, left:0, behavior:'smooth'})
    curPage++;
  }
  else if (event.deltaY < 0 && curPage > 2) {
    curHeight -= pageHeight;
    window.scrollTo({top:curHeight, left:0, behavior:'smooth'})
    curPage--;
  }
}
setTimeout(function()
  {window.addEventListener("wheel", scroll);
},2800)

