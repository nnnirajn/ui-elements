const getButtonsWrapper = document.querySelector('.buttons');
const getButtons = getButtonsWrapper.querySelectorAll('.buttons li');


getButtons.forEach(butList => {
	// console.log(butList);
	butList.addEventListener("click", (e) => {
		let getCurrentButList = e.target;
		// console.log(getCurrentButList);
		if (getCurrentButList) {
			getButtons.forEach(items => {
				items.classList.remove('active');
			});
			getCurrentButList.classList.add('active');
		}
	});

});