let toggleButton = document.getElementById("toggleButon");
let heading = document.querySelector('h1');

toggleButton.addEventListener('change', function() {
    heading.classList.toggle('active');
});