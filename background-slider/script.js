const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const body = document.body;
body.style.backgroundImage = slides[0].style.backgroundImage;
let backgroundCounter = 0;

btnRight.addEventListener("click", () => {
  if (backgroundCounter < slides.length - 1) {
    backgroundCounter++;
  } else {
    backgroundCounter = 0;
  }
  slides.forEach((el, ind) => {
    if (ind == backgroundCounter) {
      el.classList.add("active");
      body.style.backgroundImage = el.style.backgroundImage;
    } else {
      el.classList.remove("active");
    }
  });
});

btnLeft.addEventListener("click", () => {
  if (backgroundCounter > 0) {
    backgroundCounter--;
  } else {
    backgroundCounter = slides.length - 1;
  }
  slides.forEach((el, ind) => {
    if (ind == backgroundCounter) {
      el.classList.add("active");
      body.style.backgroundImage = el.style.backgroundImage;
    } else {
      el.classList.remove("active");
    }
  });
});
