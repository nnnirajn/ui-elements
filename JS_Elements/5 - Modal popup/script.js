const butt = document.querySelector('#but');
const modal = document.querySelector('#modal');
const modalToggler = document.querySelector('#modal-toggle');

butt.addEventListener("click", ()=> {
	modal.classList.toggle('is-visible');
});

modalToggler.addEventListener("click", ()=> {
	modal.classList.toggle('is-visible');
})

