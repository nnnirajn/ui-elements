PDFEmbedJS.loadPDF('pdf-container', './Sample.pdf');


document.getElementById('next').addEventListener('click', () => PDFEmbedJS.nextPage());
document.getElementById('prev').addEventListener('click', () => PDFEmbedJS.prevPage());
document.getElementById('zoomIn').addEventListener('click', () => PDFEmbedJS.zoomIn());
document.getElementById('zoomOut').addEventListener('click', () => PDFEmbedJS.zoomOut());