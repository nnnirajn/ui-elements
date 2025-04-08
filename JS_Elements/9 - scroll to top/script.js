const getScrollButton = document.querySelector('.scroll-top');

window.addEventListener("scroll", ()=> {
	let getHeightFromTop = window.pageYOffset;
	
	if(getHeightFromTop > 200) {
		getScrollButton.style.cssText = "display: block";
	}else {
		getScrollButton.style.cssText = "display: none";
	}
});

getScrollButton.addEventListener("click", ()=> {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	  });
});