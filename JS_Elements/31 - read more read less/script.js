const button = document.querySelector("button");
const content = document.querySelector("p");

// Initial state
content.classList.add('read-less');

// Toggle function
button.addEventListener('click', () => {
    if (content.classList.contains('read-less')) {
        content.classList.remove('read-less');
        content.classList.add('read-more');
        button.classList.add('read-more');
    } else {
        content.classList.remove('read-more');
        content.classList.add('read-less');
        button.classList.remove('read-more');
    }
});
