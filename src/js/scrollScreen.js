const lastPage = document.querySelectorAll('.section').length;
let curPage = curHeight = 0;

setTimeout(() => {
  window.addEventListener("wheel", (e) => 
  {
    if($(".menu-tree").classList.contains("is-active")){
      return;
    }
    const pageHeight = window.innerHeight;
    if (e.deltaY > 0 && curPage < lastPage){ 
      curPage++;
      window.scrollTo({top:curPage*pageHeight, left:0, behavior:'smooth'})
    }
    else if (e.deltaY < 0 && curPage > 1) {
      curPage--;
      window.scrollTo({top:curPage*pageHeight, left:0, behavior:'smooth'})
    }
  });
},2800)

