const ratingsContainer = document.querySelector(".ratings-container");
const rating = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
const panel = document.querySelector("#panel");

let feedback = "Satisfied";

ratingsContainer.addEventListener("click", function (e) {
  if (e.target.closest(".rating")) {
    rating.forEach((el) => {
      if (el == e.target.closest(".rating")) {
        el.classList.add("active");
        feedback = el.querySelector("small").textContent;
      } else {
        el.classList.remove("active");
      }
    });
  }
});

btn.addEventListener("click", function () {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${feedback}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});
