const body = document.body;

body.addEventListener("click", function (event) {
  if ((event.target.nodeName = "BUTTON")) {
    event.target.closest("div").classList.toggle("active");
  }
});
