$(window).on('load', function () {
    $('.preloader').fadeOut().promise().done(function () {
        $(this).delay(400).fadeOut('slow');
    });
});