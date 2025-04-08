// Ripple Animation
let rippleButton = document.querySelector('.ripple');

rippleButton.addEventListener('click', (e)=> {

	console.log(e.clientX); // event object
	console.log(rippleButton.offsetLeft); // offset

	let x = e.clientX - rippleButton.offsetLeft;
	let y = e.clientY - rippleButton.offsetTop;

	const ripple = document.createElement('span');
	ripple.style.cssText = `top: ${y}px; left: ${x}px;`;

	rippleButton.appendChild(ripple);

	setTimeout(() => {
		ripple.remove();
	}, 1500);
});