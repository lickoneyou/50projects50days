const li = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const img = document.querySelectorAll("img");

ul.addEventListener("click", function (e) {
  if (e.target.closest("li")) {
    li.forEach((el) => el.classList.remove("active"));
    e.target.closest("li").classList.add("active");
    let tg = e.target
      .closest("li")
      .querySelector("p")
      .textContent.toLowerCase();
    img.forEach((el) =>
      tg.includes(el.alt)
        ? el.classList.add("show")
        : el.classList.remove("show")
    );
  }
});
