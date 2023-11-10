$(function () {
  var currentCategory = "all";

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

  function openFullscreenImage(imageUrl) {
    $("#fullscreen-image-wrapper").html('<img src="' + imageUrl + '">');
    $("#fullscreen-image").fadeIn();
  }

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  function showMoreCards(cardsToLoad) {
    var hiddenItems = $(".filter .items .item." + currentCategory + ":hidden");
    hiddenItems.slice(0, cardsToLoad).fadeIn();

    if (hiddenItems.length === 0) {
      $(".filter .load-more").hide();
    }
  }

  function updateDescription(category, descriptions) {
    var description = descriptions[category];

    if (!description) {
      description = descriptions.all;
    }

    $(".filter .description").hide().text(description).fadeIn("fast");
  }

  function setupLoadMoreButton(cardsToShow, loadMoreStepDesktop, loadMoreStepMobile) {
    $(".filter .items .item." + currentCategory + ":hidden").hide();
    $(".filter .items .item." + currentCategory + ":lt(" + cardsToShow + ")").fadeIn();

    var totalItems = $(".filter .items .item." + currentCategory).length;

    if (totalItems > cardsToShow) {
      $(".filter .load-more").show();
    } else {
      $(".filter .load-more").hide();
    }

    $("#loadMoreBtn").on("click", function () {
      var loadMoreStep = $(window).width() < 768 ? loadMoreStepMobile : loadMoreStepDesktop;
      showMoreCards(loadMoreStep);

      if ($(".filter .items .item." + currentCategory + ":hidden").length === 0) {
        $(".filter .load-more").hide();
      }
    });
  }

  function loadDescriptions(callback) {
    $.getJSON('json/descriptions.json', function (data) {
      callback(data);
    });
  }

  $(".buttons span").on("click", function () {
    var category = $(this).attr("class");
    updateButtonStyles($(this));

    if ($(".items").length) {
      if (category === "all") {
        $(".items .item").fadeIn("fast");
      } else {
        $(".items .item").hide();
        $(".items ." + category).show();
      }
    }

    scrollToFilter($(this));
  });

  $(".filter .buttons span").on("click", function () {
    currentCategory = $(this).attr("class");

    $(".filter .items .item").hide();
    $(".filter .items .item." + currentCategory + ":hidden").slice(0, 10).fadeIn();

    loadDescriptions(function (descriptions) {
      updateDescription(currentCategory, descriptions);
    });

    var totalItems = $(".filter .items .item." + currentCategory).length;

    if (totalItems > 10) {
      $(".filter .load-more").show();
    } else {
      $(".filter .load-more").hide();
    }
  });

  $("#fullscreen-image").click(function () {
    $(this).fadeOut();
  });

  $(".filter .item").click(function () {
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

  var filter = getUrlParameter('filter');

  if (filter) {
    $(".buttons span." + filter).click();
  } else {
    $(".buttons span.all").click();
  }

  var cardsToShow = 10;
  var loadMoreStepDesktop = 5;
  var loadMoreStepMobile = 4;

  setupLoadMoreButton(cardsToShow, loadMoreStepDesktop, loadMoreStepMobile);
});