$(document).ready(function() {
  $(".title").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(500);
      $(".title i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".title i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".title").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(500);
      $(this)
        .siblings(".content")
        .slideDown(500);
    }
  });
});