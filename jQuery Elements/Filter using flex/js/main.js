//===== Isotope Project 1
    
   
        var $grid = $('.grid').isotope({
        // options
            transitionDuration: '1s',
            itemSelector: '.grid-item',
            percentPosition: true
            
        });
        
        // filter items on button click
        $('.list ul').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.list ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
  