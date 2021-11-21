const lastPage = document.querySelectorAll('.section').length;
let curPage = curHeight = 0;

function scrollScreen(event) {
  if($(".menu-tree").classList.contains("is-active")){
    return;
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
  {window.addEventListener("wheel", scrollScreen);
},2800)

