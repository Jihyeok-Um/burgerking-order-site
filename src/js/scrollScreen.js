window.addEventListener("load", function() {
    let aElSection = document.querySelectorAll("main > div");
    let curSIdx = 1;
    let scroll = 0;


	console.log(aElSection);
    let wheelTimer;
    window.addEventListener("wheel", function(e) {
        clearTimeout(wheelTimer);
      wheelTimer = setTimeout(function() {
          if(e.deltaY < 0) 	doScroll(++curSIdx);
        else doScroll(--curSIdx);
      }, 50);
    });
    
    function doScroll(sidx) {
		if (scroll == 0) {
			setTimeout(function() {
				sidx = sidx < 0 ? 0 : sidx;
				sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx;
			
				curSIdx = sidx;
			
				aElSection[curSIdx].scrollIntoView({
				  block: "start", inline: "start", behavior: "smooth"
				});
			  scroll += 1;  
			}, 3000);
		}
		else {
			sidx = sidx < 0 ? 0 : sidx;
      		sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx;
      
      		curSIdx = sidx;
      
      		aElSection[curSIdx].scrollIntoView({
        		block: "start", inline: "start", behavior: "smooth"
      		});
			scroll += 1;  
		}
    }
  });