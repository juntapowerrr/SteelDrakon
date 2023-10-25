$(document).on("click","span.all", function(){
    $("div.item").show().effect("fade","fast");
})

$("span.landscaping").on("click", function(){
      $("div.item").hide();
      $("div.landscaping").show().effect("fade","fast");
})

$("span.metal").on("click", function(){
      $("div.item").hide();
      $("div.metal").show().effect("fade","fast");
})
// $("span.temp").on("click", function(){
//       $("div.item").hide();
//       $("div.temp").show().effect("fade","fast");
// })

/*
.slideUp(); - скрыть
.slideDown(); - показать
*/