const mobileNavbarMenu = document.querySelector('.hamburger');
const mobileNavbar = document.querySelector('.navbar-mobile');

mobileNavbarMenu.addEventListener("click", ()=> {
	mobileNavbarMenu.classList.toggle('isactive');
	mobileNavbar.classList.toggle('toggle-menu');
});