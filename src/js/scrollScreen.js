const page = document.querySelectorAll('.section');
const lastPage = page.length;
let curPage = 0;
let curHeight = 0;

function scroll(event) {
  if(menuTree.classList.contains("is-active")){
    return 0;
  }

  const pageHeight = window.innerHeight;
  if (event.deltaY > 0 && curPage < lastPage){ 
    curPage++;
    window.scrollTo({top:curPage*pageHeight, left:0, behavior:'smooth'})
  }
  else if (event.deltaY < 0 && curPage > 1) {
    curPage--;
    window.scrollTo({top:curPage*pageHeight, left:0, behavior:'smooth'})
  }
}
setTimeout(function()
  {window.addEventListener("wheel", scroll);
},2800)

