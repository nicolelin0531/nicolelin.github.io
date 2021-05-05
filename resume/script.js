var a = document.querySelector(".navbar-toggler");
$(".navbar-nav li a").on("click", function () {
  if ($(window).width() < 768) a.click();
});
