const nav = document.querySelector(".nav");

addEventListener("scroll", function (e) {
  const y = window.pageYOffset;
  if (y > (y / 4)) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
