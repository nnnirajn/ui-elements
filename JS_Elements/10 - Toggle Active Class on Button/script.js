// Select the button element
const button = document.querySelector("button");

// Add click event listener to toggle the 'active' class
button.addEventListener("click", function () {
  // Toggle the 'active' class on the button
  this.classList.toggle("active");
});
