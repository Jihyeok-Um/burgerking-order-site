window.onload = function(){
	const page = document.querySelectorAll('.section');
	const lastPage = page.length;
  let curPage = 1;
  const pageHeight = window.innerHeight;
  let curHeight = 0;

  function scroll(event) {
    if (event.deltaY > 0 && curPage < lastPage) {
      curHeight += pageHeight;
      window.scrollTo({top:curHeight, left:0, behavior:'smooth'})
      curPage++;
    }
    else if (event.deltaY < 0 && curPage > 1) {
      curHeight -= pageHeight;
      window.scrollTo({top:curHeight, left:0, behavior:'smooth'})
      curPage--;
    }
  }
  setTimeout(function()
    {window.addEventListener("wheel", scroll);
  },3000)
}