$(function(){
    $('#enroll_product').click(function(){
        $('.back_ignore').show()
        $('#enroll_form').animate({
            top: '0'
        },1000);
    });

    $('.btn-close').click(function(){
        $('.back_ignore').hide()
        $('#enroll_form').animate({
            top:'-2000px'
        },1000);
    });
});
