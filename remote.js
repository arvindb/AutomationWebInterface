$(document).ready(function(){
    $('.button').click(function(){
        var clickBtnValue = $(this).val();
        var ajaxurl = 'remote.php';
        data = {clickBtnValue};
        $.post(ajaxurl, data, function (response) {
        	// Response div goes here.
            console.log(response);
       });
    });

});