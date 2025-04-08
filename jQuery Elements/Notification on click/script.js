$(document).ready(function() {
  $('#show-hidden-menu').click(function() {
    $('.hidden-menu').toggleClass('show-hide');
    // Alternative animation for example
    // slideToggle("fast");
  });
});