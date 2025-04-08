var div_top = $('.menu').offset().top;

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.menu').is('.sticky')) {
            $('.menu').addClass('sticky');
        }
    } else {
        $('.menu').removeClass('sticky');
    }
});