const counter = document.querySelector(".counter");
const final = document.querySelector(".final");
const replay = document.querySelector("#replay");
const spans = document.querySelectorAll("span");

function animate() {
    spans.forEach(el => el.classList.remove('in', 'out'))
    spans[0].classList.add('in')
  spans.forEach((el) => {
    el.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn") {
        el.classList.remove("in");
        el.classList.add("out");
      } else if (e.animationName === "goOut" && el.nextElementSibling) {
        el.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        final.classList.add("show");
      }
    });
  });
}

animate()

replay.addEventListener("click", () => {
  counter.classList.remove("hide");
  final.classList.remove("show");
  animate()
});

