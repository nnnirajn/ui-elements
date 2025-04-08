$('#test').change(function(){
    if($(this).is(":checked")) {
        $('.simple').addClass('checkked');
    } else {
        $('.simple').removeClass('checkked');
    }
});