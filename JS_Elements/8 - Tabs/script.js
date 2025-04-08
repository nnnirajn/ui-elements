const tabMain = document.querySelector('.tabs-main');
const tabHeaderList = document.querySelectorAll('.tabs-main .tab-header ul li');
const tabContentList = document.querySelectorAll('.tabs-main .tab-content .tab-inner');

// console.log(tabMain);
// console.log(tabHeaderList);
// console.log(tabContentList);

tabMain.addEventListener("click", (event) => {
	// console.log(event.target.dataset.tab);

	let getCurrentHeadingTab = event.target.dataset.tab; // get value of dataset tab using event target

	if (getCurrentHeadingTab) {
		// console.log(event.target);
		tabHeaderList.forEach(headerList => {
			headerList.classList.remove('active');
		});
		event.target.classList.add('active');

		// below code is for tab content
		tabContentList.forEach((contentList) => {
			contentList.classList.remove('active');
		});

		let getCurrentContentTab = document.querySelector(`#${getCurrentHeadingTab}`);
		// console.log(getCurrentHeadingTab);
		getCurrentContentTab.classList.add('active');
	}
});

