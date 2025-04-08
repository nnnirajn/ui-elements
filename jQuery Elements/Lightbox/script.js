jQuery(document).ready(function() {
    	jQuery('.popup-gallery').magnificPopup({
    		delegate: 'a',
    		type: 'image',  
            zoom: {
                     enabled: true, 
                     duration: 300, 
                     easing: 'ease-in-out', 
                  },
    		gallery: {
    			enabled: true,
    			navigateByImgClick: true,
    			preload: [0,1]
    		}
    	});
    });