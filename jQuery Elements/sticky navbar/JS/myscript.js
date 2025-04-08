$(document).on('scroll', function(){
   if($(this).scrollTop() > 5){
         $('header').addClass('sticky');
   }else{
      $('header').removeClass('sticky');
   }
});