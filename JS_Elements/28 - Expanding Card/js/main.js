const images = document.querySelectorAll(".wrapper img");

images.forEach(image => {
  image.addEventListener('click', () => {
    // Remove active class from all images
    images.forEach(img => img.classList.remove('active'));
    // Add active class to clicked image
    image.classList.add('active');
  });
});

// Set first image as active by default
if (images.length > 0) {
  images[0].classList.add('active');
}