//  show hide div on button click

const toggleButton = document.getElementById("toggleButton");
const toggleDiv = document.getElementById("toggleDiv");

// Initially hide the div
toggleDiv.classList.add("show");

// Add click event listener to the button
toggleButton.addEventListener("click", function() {
    // Toggle between show and hide classes
    if (toggleDiv.classList.contains("hide")) {
        toggleDiv.classList.remove("hide");
        toggleDiv.classList.add("show");
    } else {
        toggleDiv.classList.remove("show");
        toggleDiv.classList.add("hide");
    }
});
