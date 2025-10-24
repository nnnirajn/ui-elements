// Select the button and box elements
const button = document.querySelector('button');
const box = document.querySelector('.box');

// Add click event listener to the button
button.addEventListener('click', function() {
  // Toggle the 'active' class on the box
  box.classList.toggle('active');
});