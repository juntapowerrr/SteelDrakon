$(function () {
    $(".form-input-phone").mask("+38 (099) 99 99 999", { placeholder: "-" });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$(".form-control").click(function () {
    $(this).setCursorPosition(4);  // set position number
});