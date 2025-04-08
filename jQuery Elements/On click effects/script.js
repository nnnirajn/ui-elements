$('.clk a').click(function(){
    
    // for changing icon on click
    
    $(this).find('i').toggleClass('fa-plus-circle fa-minus-circle');
    
    // for adding class on click
  
 $(this).toggleClass('he'); 
    
    // for changing text on click
  
// $(this).text(function(i, v){
//		   return v === 'some text' ? 'PULL ME' : 'some text'
//		});
  
});