let radio = document.querySelectorAll(".radio-item");
let text = document.querySelector(".text");
let maleRadio = document.getElementById("male");
let femaleRadio = document.getElementById("female");

// Add event listener for male radio button
maleRadio.addEventListener("click", function() {
    // Remove any existing gender classes
    text.classList.remove("women");
    // Add men class
    text.classList.add("men");
    // Update text content
    text.textContent = "Male Selected";
});

// Add event listener for female radio button
femaleRadio.addEventListener("click", function() {
    // Remove any existing gender classes
    text.classList.remove("men");
    // Add women class to match the CSS
    text.classList.add("women");
    // Update text content
    text.textContent = "Female Selected";
});
