$(document).ready(function(){
    $('.nav__item-dropdown').click(function(){
        $(this).find('.nav__dropdown').fadeToggle(200);
    });

    $('#mobile-button').click(function(){
        $('#naw-wrapper').closest('.nav__wrapper').fadeToggle(200);
        $('#burger').toggleClass('active');
    });

    let year = new Date().getFullYear();
    $('#year').html(year);
});
