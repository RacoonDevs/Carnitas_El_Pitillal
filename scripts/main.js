$(document).ready(function () {
  $(".grid-menu-tacos .box-tacos").hover(function () {
    const title = $(this).find("p").text();
    const description = $(this).find("h6").text();
    const img = $(this).find("img");
    $("#taco-title").text(title);
    $("#taco-description").text(description);
    $("#taco-img").attr("src", img[0].src);
  });
});
