document.querySelectorAll('.tree-node').forEach(function (node) {
  node.querySelector('.tree-label').addEventListener('click', function () {
    node.classList.toggle('open');
  });
});
