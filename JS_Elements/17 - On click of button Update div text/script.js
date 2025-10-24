let toggleButton = document.getElementById("toggleButton");
let textDiv = document.getElementById("textDiv");

// Initial text state
let isToggled = false;

// Add click event listener to the button
toggleButton.addEventListener("click", function() {
    // Toggle between two states
    if (isToggled) {
        textDiv.textContent = "Click to Update";
    } else {
        textDiv.textContent = "Text has been updated!";
    }
    
    // Flip the toggle state
    isToggled = !isToggled;
});
