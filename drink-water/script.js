const cupSmall = document.querySelectorAll(".cup-small");
const cups = document.querySelector(".cups");
const percentage = document.querySelector("#percentage");
const liters = document.querySelector("#liters");
const remained = document.querySelector("#remained");

const l = 20;
const h = 0;

cups.addEventListener("click", function (e) {
  let count = 0;
  if (e.target.classList.contains("cup")) {
    cupSmall.forEach((el) => {
      if (el.dataset.pos <= e.target.dataset.pos) {
        if (
          e.target.dataset.pos == 1 &&
          e.target.classList.contains("full") &&
          percentage.textContent == "12.5%"
        ) {
          e.target.classList.remove("full");
          count = 0;
          percentage.style.visibility = "hidden";
        } else {
          el.classList.add("full");
          count += 1;
          return;
        }
      } else {
        el.classList.remove("full");
      }
    });
  }
  if (count >= 0) {
    percentage.style.visibility = "visible";
    remained.style.visibility = "visible";
    percentage.style.height = `${h + 41.25 * count}px`;
    liters.textContent = `${l - count * 2.5}L`;
    percentage.textContent = `${count * 12.5}%`;
    console.log(count);
    if (count == 8) {
      remained.style.visibility = "hidden";
      remained.style.height = "0px";
    }
  }
});
