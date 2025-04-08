var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      speed: 2000,
      slidesPerView: '1',
      loop: true,
      loopedSlides: 4
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      speed: 2000,
      centeredSlides: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  
      slidesPerView: '1',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 4
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;