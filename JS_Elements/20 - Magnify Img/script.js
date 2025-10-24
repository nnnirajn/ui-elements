// Example 1

magnifyImg({
  src: "meal-1.jpg",
  target: document.getElementById("example1"),
  zoom: 1.25,
  MagnifyDomWidth: 180,
  MagnifyDomStyles: {
    border: "3px solid #ff6600",
    borderRadius: "50%",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  // overflow: false,
});

// Example 2

magnifyImg({
  src: "meal-1.jpg",
  target: document.getElementById("example3"),
  MagnifyDom: document.getElementById("zoomBox"),
  zoom: 1.5,
});


// https://www.cssscript.com/img-magnify/