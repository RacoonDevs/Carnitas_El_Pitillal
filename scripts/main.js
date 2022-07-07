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

function reveal() {
  var reveals = document.querySelectorAll(".card-quesadillas-slide-left");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function reveal2() {
  var reveals = document.querySelectorAll(".card-quesadillas-slide-right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
