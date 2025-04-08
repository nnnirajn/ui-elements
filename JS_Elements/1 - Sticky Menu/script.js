const navbar = document.querySelector('.navbar');

let stickyTopValue = navbar.offsetTop;
console.log(stickyTopValue);

window.addEventListener("scroll", () => {
	let scrollTopValue = window.pageYOffset;
	console.log(scrollTopValue);

	if (scrollTopValue > stickyTopValue) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}

});