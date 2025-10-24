const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", function() {
    if (toggleButton.textContent === "Updated") {
        toggleButton.textContent = "Click to Update";
    } else {
        toggleButton.textContent = "Updated";
    }
});
