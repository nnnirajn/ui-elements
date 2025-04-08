let getWrapper = document.querySelector('.wrapper');
let cards = getWrapper.querySelectorAll('.card');

// console.log(cards);

cards.forEach((getEachCard) => {
	getEachCard.addEventListener('click', (e)=> {
		
		let getCurrentItem = e.target;
		// console.log(getCurrentItem);

		if(getCurrentItem) {
			cards.forEach((item) => {
				item.classList.remove('active');	
			});
			getCurrentItem.classList.add('active');
		}

	});
});