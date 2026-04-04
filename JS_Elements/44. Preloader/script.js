(function () {
  const preloader = document.getElementById('preloader');

  function hidePreloader() {
    preloader.classList.add('hidden');
    // Remove from DOM after transition so it doesn't block interaction
    preloader.addEventListener('transitionend', function remove() {
      preloader.remove();
    });
  }

  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader);
  }
})();
