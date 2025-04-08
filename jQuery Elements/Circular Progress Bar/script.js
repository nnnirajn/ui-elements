$(document).ready(function ($) {
    function animateElements() {
        
        /* without decimal point | gradient | custom angle */
        
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 180,
                    thickness: 30,
                    lineCap: 'round',
                    emptyFill: "rgba(255,255,55, 1)",
                    fill: {
                        gradient: ['#454624', '#124789']
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(0.1) + "%");
                }).stop();
            }
        });
        
         /* with decimal point */
        
        $('.progressbar2').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle2').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle2').circleProgress({
//                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 180,
                    thickness: 30,
                    duration: 5000,
                    emptyFill: "rgba(255,255,255, 1)",
                    fill: {
                        color: '#fb4f14'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });
        
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);




}); //end document ready function