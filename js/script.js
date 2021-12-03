$(document).ready(function(){
    if($(window).width() < 1025) {
        $('.nav__item-dropdown')
            .find('.nav__dropdown').css('display: none;');
        $('.nav__item-dropdown')
            .click(function(){
                if($(window).width() < 1025) {
                    console.log(444)
                    $(this).find('.nav__dropdown').fadeToggle(200);
                }
            })
    } else {
        $('.nav__item-dropdown')
            .mouseenter(function(){
                $(this).find('.nav__dropdown').fadeIn(200);
            })
            .mouseleave( function(){
                $(this).find('.nav__dropdown').fadeOut(200);
            });
    }

    $('#mobile-button').click(function(){
        $('#naw-wrapper').closest('.nav__wrapper').fadeToggle(200);
        $('#burger').toggleClass('active');
    });

    let year = new Date().getFullYear();
    $('#year').html(year);
});
