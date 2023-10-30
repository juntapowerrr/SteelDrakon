$(document).ready(function() {
    $('.header__link, #btnCta1').fixedHeaderScroll( {
        headerSelector: 'header',
        offset: 0,
        offset: $('.header').offsetHeight,
        smooth: true,
        smoothDuration: 500,
        smoothEasing: 'swing'
    });

    $('.header__burger, .header__link, #btnCta1').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__burger').click(function() {
        $("#phoneBody1, #phoneBody2, #overlay").fadeOut();
    });

    $("#phoneBody1, #phoneBody2, #overlay").hide();
    $("#btnPhone1").click(function(){
        $("#phoneBody1, #overlay").fadeToggle();
    });
    $("#btnPhone2").click(function(){
        $("#phoneBody2, #overlay").fadeToggle();
    });

    $(window).on('scroll', function() {
        $('.container').css({
            opacity: 1,
        })
    });
});