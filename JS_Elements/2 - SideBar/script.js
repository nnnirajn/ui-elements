const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", ()=>{
	hamburger.classList.toggle("isactive");
	sidebar.classList.toggle("isactive");
});

close.addEventListener("click", ()=>{
	sidebar.classList.remove("isactive");
	hamburger.classList.remove("isactive");
});