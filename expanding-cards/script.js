const panels = document.querySelectorAll(".panel");
const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  if (event.target.classList.contains("panel")) {
    panels.forEach((el) =>
      el == event.target
        ? el.classList.add("active")
        : el.classList.remove("active")
    );
  }
});
