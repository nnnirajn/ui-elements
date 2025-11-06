let men = document.getElementById("men");
let women = document.getElementById("women");
let text = document.querySelector("h1");

function updateClasses() {
    // Clear all classes first
    text.classList.remove("men", "women", "both");
    
    // Check which checkboxes are selected and apply appropriate classes
    if (men.checked && women.checked) {
        text.classList.add("both");
    } else if (men.checked) {
        text.classList.add("men");
    } else if (women.checked) {
        text.classList.add("women");
    }
}

// Add event listeners to both checkboxes
men.addEventListener("click", updateClasses);
women.addEventListener("click", updateClasses);

// Initialize classes based on initial checkbox state
updateClasses();