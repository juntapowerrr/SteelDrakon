$(function () {
    var currentCategory = "music-square";

    function updateButtonStyles(clickedButton) {
        $(".buttons span").css({
            "background-color": "",
            "color": ""
        });

        clickedButton.css({
            "background-color": "#F7CA3A",
            "color": "#000000"
        });
    }

    function scrollToFilter(clickedButton) {
        var selectedOffset = clickedButton.offset().left;
        var containerOffset = $(".buttons").offset().left;
        var scrollAmount = selectedOffset - containerOffset;
        $(".buttons").animate({
            scrollLeft: "+=" + scrollAmount
        }, "fast");
    }

    function showCardsForCategory(category) {
        $(".items .item").hide();
        $(".items ." + category).slice(0, 1).fadeIn();
    }

    $(".buttons span").on("click", function () {
        var category = $(this).attr("class");
        updateButtonStyles($(this));

        if ($(".items").length) {
            showCardsForCategory(category);
        }

        scrollToFilter($(this));
    });

    $("#fullscreen-image").click(function () {
        $(this).fadeOut();
    });

    $(".filter .item .item__thumbnail").click(function (event) {
        event.stopPropagation(); // Остановка всплытия события, чтобы не срабатывал click на родительском элементе
        var imageUrl = $(this).find("img").attr("src");

        $("#image-wrapper").html('<img src="' + imageUrl + '">');
        $("#fullscreen-image").fadeIn();
    });

    $("#fullscreen-image").click(function () {
        $(this).fadeOut();
    });

    const element = document.querySelector(".buttons");

    if (element) {
        element.addEventListener('wheel', (event) => {
            event.preventDefault();

            element.scrollBy({
                left: event.deltaY < 0 ? -30 : 30,
            });
        });
    }

    showCardsForCategory(currentCategory);
    updateButtonStyles($(".buttons span." + currentCategory));
});