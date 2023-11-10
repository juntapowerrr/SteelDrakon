function updateButtonStyles(clickedButton) {
  // Сбросить стили для всех кнопок
  $(".buttons span").css({
    "background-color": "",
    "color": ""
  });

  // Установить стили для активной кнопки
  clickedButton.css({
    "background-color": "#F7CA3A",
    "color": "#000000"
  });
}

$(document).ready(function () {
  // Функция для получения значения параметра из URL
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Обработчики событий для кнопок фильтрации
  $(".buttons span").on("click", function () {
    var category = $(this).attr("class");
    updateButtonStyles($(this));

    if (category === "all") {
      $(".items .item").fadeIn("fast");
    } else {
      $(".items .item").hide();
      $(".items ." + category).fadeIn("fast");
    }

    // Скролл к выбранному фильтру
    var selectedOffset = $(this).offset().left;
    var containerOffset = $(".buttons").offset().left;
    var scrollAmount = selectedOffset - containerOffset;
    $(".buttons").animate({ scrollLeft: "+=" + scrollAmount }, "fast");
  });

  // Получаем значение параметра из URL
  var filter = getUrlParameter('filter');

  // Активация фильтра, если параметр присутствует в URL
  if (filter) {
    $(".buttons span." + filter).click();
  } else {
    // Активация первой кнопки по умолчанию
    $(".buttons span.all").click();
  }

  // Открытие изображения в полноэкранном режиме
  $(".filter .item").click(function () {
    var imageUrl = $(this).find("img").attr("src");

    $("#image-wrapper").html('<img src="' + imageUrl + '">');
    $("#fullscreen-image").fadeIn();
  });

  $("#fullscreen-image").click(function () {
    $(this).fadeOut();
  });

  const element = document.querySelector(".buttons");

  element.addEventListener('wheel', (event) => {
    event.preventDefault();

    element.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
    });
  });
});