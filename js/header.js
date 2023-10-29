$(document).ready(function() {
    $('.header__link').fixedHeaderScroll( {
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

    //$("#phoneBody1").hide();
    $("#btnPhone1").click(function() {
        $("#phoneBody1").show("300");
    });

    $(window).on('scroll', function() {
        $('.container').css({
            opacity: 1,
        })
    });
});