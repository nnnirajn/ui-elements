let men = document.getElementById("men");
let women = document.getElementById("women");
let text = document.querySelector("h1");

function updateText() {
    if (men.checked && women.checked) {
        text.textContent = "Both Selected";
    } else if (men.checked) {
        text.textContent = "Men Selected";
    } else if (women.checked) {
        text.textContent = "Women Selected";
    }
}

men.addEventListener("click", updateText);
women.addEventListener("click", updateText);