// create our new observer, we want the trigger point of elements to be when the element is 25% visible.
// you could create multiple observers with different thresholds if necessary
let observer = new IntersectionObserver( isElScrolledIntoView, {
	  root: null,
	  rootMargin: '50px',
	  threshold: 0.25
});

// grab our elements, this will be a global class for animating elements
const elements = document.querySelectorAll('.is-animated');

// loop over all elements and observe each of them
elements.forEach( element => {
	observer.observe(element);
});

// create our "what to do with each observed element" function
function isElScrolledIntoView( entries ) {
	// again loop over all entries (element)
	entries.forEach( entry => {
		// check if the entry is intersecting at our set threshold
		if ( entry.isIntersecting ) {
			// set a class to toggle animation
			entry.target.classList.add('scrolled-into-view');
			// if we only want to play the animation once per page, let's also add a class for that
			entry.target.classList.add('scrolled-into-view-first-time');
		} else {
			// if we've stopped intersecting, let's remove the animation
			entry.target.classList.remove('scrolled-into-view');
		}
	});
}
