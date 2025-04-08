$(document).ready(function() {
		$('.sidebar a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
                        // 900 is for controlling speed slow/fast
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		if (scrollDistance >= 550) {
//				$('.sidebar').fadeIn("slow");
                $('.sidebar').addClass('is_stuck');
		} else {
//				$('.sidebar').fadeOut("slow");
               $('.sidebar').removeClass('is_stuck');
		}
    
      if (scrollDistance >= 4600) {
				$('.sidebar').fadeOut("slow");
               
		} else {
				$('.sidebar').fadeIn("slow");
            
		}
	
		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.sidebar a.active').removeClass('active');
						$('.sidebar a').eq(i).addClass('active');
				}
		});
}).scroll();