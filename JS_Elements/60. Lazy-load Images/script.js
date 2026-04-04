(function () {
  var PLACEHOLDER =
    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

  function buildImageGrid(container, count) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var figure = document.createElement("figure");
      figure.className = "card";
      var img = document.createElement("img");
      img.className = "lazy";
      img.alt = "Random landscape " + (i + 1);
      img.src = PLACEHOLDER;
      img.setAttribute(
        "data-src",
        "https://picsum.photos/800/500?random=" + (i + 1)
      );
      var cap = document.createElement("figcaption");
      cap.textContent = "picsum #" + (i + 1);
      figure.appendChild(img);
      figure.appendChild(cap);
      fragment.appendChild(figure);
    }
    container.appendChild(fragment);
  }

  var grid = document.getElementById("image-grid");
  if (grid) {
    buildImageGrid(grid, 12);
  }

  if (typeof LazyLoad === "undefined") {
    console.warn("vanilla-lazyload failed to load; check the CDN script.");
    return;
  }

  new LazyLoad({
    elements_selector: ".lazy",
    threshold: 200,
  });
})();
