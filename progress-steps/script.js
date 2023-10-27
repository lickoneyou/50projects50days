const progress = document.querySelector("#progress");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let counter = 1;
let w = 0;

nextBtn.addEventListener("click", () => {
  prevBtn.disabled = false;
  if (counter < 4) {
    counter++;
    w += 33.3;
  }
  if (counter == 4) {
    nextBtn.disabled = true;
  }
  progress.style.width = `${w}%`;
  circles.forEach((el, ind) =>
    ind < counter ? el.classList.add("active") : el.classList.remove("active")
  );
});

prevBtn.addEventListener("click", () => {
  nextBtn.disabled = false;
  if (counter > 1) {
    counter--;
    w -= 33.3;
  }
  if (counter == 1) {
    prevBtn.disabled = true;
  }
  progress.style.width = `${w}%`;
  circles.forEach((el, ind) =>
    ind < counter ? el.classList.add("active") : el.classList.remove("active")
  );
});
