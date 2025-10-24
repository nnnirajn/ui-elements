document.addEventListener('DOMContentLoaded', () => {
  const resizable = document.querySelector('.resizable');
  const resizer = document.querySelector('.resizer');
  const handles = document.querySelectorAll('.resize-handle');

  let isResizing = false;
  let currentHandle = null;
  let startX, startY, startWidth, startHeight;

  // Initial size
  const initialWidth = resizer.offsetWidth;
  const initialHeight = resizer.offsetHeight;

  // Add mouse event listeners to all resize handles
  handles.forEach(handle => {
    handle.addEventListener('mousedown', startResizeMouse);
    
    // Add touch event listeners for mobile devices
    handle.addEventListener('touchstart', startResizeTouch, { passive: false });
  });

  // Mouse event handlers
  function startResizeMouse(e) {
    e.preventDefault();
    isResizing = true;
    currentHandle = e.target.classList;

    // Get initial position and size
    startX = e.clientX;
    startY = e.clientY;
    startWidth = resizer.offsetWidth;
    startHeight = resizer.offsetHeight;

    // Add event listeners for resize
    document.addEventListener('mousemove', resizeMouse);
    document.addEventListener('mouseup', stopResizeMouse);
  }

  function resizeMouse(e) {
    if (!isResizing) return;
    performResize(e.clientX, e.clientY);
  }

  function stopResizeMouse() {
    isResizing = false;
    document.removeEventListener('mousemove', resizeMouse);
    document.removeEventListener('mouseup', stopResizeMouse);
  }

  // Touch event handlers
  function startResizeTouch(e) {
    e.preventDefault();
    isResizing = true;
    currentHandle = e.target.classList;

    // Get initial position and size from the first touch point
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    startWidth = resizer.offsetWidth;
    startHeight = resizer.offsetHeight;

    // Add event listeners for resize
    document.addEventListener('touchmove', resizeTouch, { passive: false });
    document.addEventListener('touchend', stopResizeTouch);
    document.addEventListener('touchcancel', stopResizeTouch);
  }

  function resizeTouch(e) {
    if (!isResizing) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    performResize(touch.clientX, touch.clientY);
  }

  function stopResizeTouch() {
    isResizing = false;
    document.removeEventListener('touchmove', resizeTouch);
    document.removeEventListener('touchend', stopResizeTouch);
    document.removeEventListener('touchcancel', stopResizeTouch);
  }

  // Common resize logic for both mouse and touch events
  function performResize(clientX, clientY) {
    // Calculate the change in position
    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    let newWidth = startWidth;
    let newHeight = startHeight;

    // Handle different resize directions
    if (currentHandle.contains('e') || currentHandle.contains('ne') || currentHandle.contains('se')) {
      newWidth = startWidth + deltaX;
    }
    
    if (currentHandle.contains('w') || currentHandle.contains('nw') || currentHandle.contains('sw')) {
      newWidth = startWidth - deltaX;
    }
    
    if (currentHandle.contains('s') || currentHandle.contains('se') || currentHandle.contains('sw')) {
      newHeight = startHeight + deltaY;
    }
    
    if (currentHandle.contains('n') || currentHandle.contains('ne') || currentHandle.contains('nw')) {
      newHeight = startHeight - deltaY;
    }

    // Apply minimum size constraints
    newWidth = Math.max(100, newWidth);
    newHeight = Math.max(100, newHeight);

    // Apply the new size
    resizer.style.width = `${newWidth}px`;
    resizer.style.height = `${newHeight}px`;
  }
});
