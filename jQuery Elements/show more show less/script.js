jQuery(document).ready(function(){

  var $this = $('.items');
  if ($this.find('div').length > 2) {
      $('.items').append('<div><a href="javascript:;" class="showMore"></a></div>');
  }
  
  // If more than 2 Education items, hide the remaining
	$('.items .item').slice(0,3).addClass('shown');
	$('.items .item').not('.shown').hide();
	$('.items .showMore').on('click',function(){
		$('.items .item').not('.shown').toggle(300);
		$(this).toggleClass('showLess');
	});

});