const hamburger = document.querySelector('.hamburger'); 
const fullScreenMenu = document.querySelector('.full-screen-menu');
const close = document.querySelector('.close');

hamburger.addEventListener("click", ()=>{
	hamburger.classList.toggle("isactive");
	fullScreenMenu.classList.toggle("isactive");
});

close.addEventListener("click", ()=>{
	fullScreenMenu.classList.remove("isactive");
	hamburger.classList.remove("isactive");
});