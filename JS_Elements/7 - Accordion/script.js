const faqBox = document.querySelectorAll('.faq-box');

faqBox.forEach((item) => {
	accQuestion = item.querySelector('.faq-question');
	
	item.classList.add('hide');

	faqBox[0].classList.remove('hide'); // To keep first FAQ Open
	 
	accQuestion.addEventListener("click", ()=> {
		for (let i = 0; i < faqBox.length; i++) {
			if(faqBox[i] == item) {
				faqBox[i].classList.toggle('hide');
			} else {
				faqBox[i].classList.add('hide');
			}
		}
		
	});
});