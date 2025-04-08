const stars = document.querySelectorAll('.star');
const outputBox = document.querySelector('.rating-value');
const nextButton = document.querySelector('#nextButton');

for (let x = 0;x < stars.length;x++) {
	stars[x].starValue = (x + 1);

	["click", "mouseover", "mouseout"].forEach(e => {
		stars[x].addEventListener(e, showRating);
	});
};

function showRating(e) {
	let type = e.type;
	let starValue = this.starValue;

	if(type === 'click'){
		if(starValue > 0){
			outputBox.innerHTML = `Rating : ${starValue}`;
		}
	}
	
	stars.forEach((elem, ind) => {
		if(type === 'click'){
			if(ind < starValue) {
				elem.classList.add('orange');
			}else {
				elem.classList.remove('orange');
			}
		}

		if(type === 'mouseover'){
			if(ind < starValue) {
				elem.classList.add('yellow');
				 
			}else {
				elem.classList.remove('yellow');
			}
		}

		if(type === 'mouseout'){
			if(ind < starValue) {
				elem.classList.remove('yellow'); 
			}
		}
	});
};

nextButton.addEventListener("click", ()=> {
	window.location.reload();
});