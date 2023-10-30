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
  // Обработчики событий для кнопок фильтрации
  $(".buttons span").on("click", function () {
    updateButtonStyles($(this));
    var category = $(this).attr("class");
    if (category === "all") {
      $("div.item").fadeIn("fast");
    } else {
      $("div.item").hide();
      $("div." + category).fadeIn("fast");
    }
  });

  // Активация первой кнопки по умолчанию
  $(".buttons span.all").click();
});

$(document).on("click", "span.all", function () {
  updateButtonStyles($(this));
  $("div.item").fadeIn("fast");
});

const element = document.querySelector(".buttons");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});