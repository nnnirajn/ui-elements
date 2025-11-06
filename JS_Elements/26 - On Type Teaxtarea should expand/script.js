// Get all textareas
const textareas = document.querySelectorAll('textarea');

// Add click event to expand textarea
textareas.forEach(textarea => {
    textarea.addEventListener('click', function(e) {
        e.stopPropagation();
        // Collapse all other textareas
        textareas.forEach(t => {
            if (t !== this) {
                t.classList.remove('expanded');
            }
        });
        // Expand the clicked one
        this.classList.add('expanded');
        this.focus();
    });
});

// Add click event to document to handle outside clicks
document.addEventListener('click', function(e) {
    // Check if the click is outside all textareas
    const clickedOnTextarea = Array.from(textareas).some(textarea => 
        textarea === e.target || textarea.contains(e.target)
    );
    
    if (!clickedOnTextarea) {
        textareas.forEach(textarea => {
            textarea.classList.remove('expanded');
        });
    }
});

// Collapse when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'TEXTAREA') {
            activeElement.classList.remove('expanded');
            activeElement.blur();
        }
    }
});