const left = document.querySelector("#left");
const right = document.querySelector("#right");
const imgs = document.querySelector("#imgs");

let pos = 0;

function autoSlide() {
  return setInterval(() => {
    if (pos > -1500) {
      pos -= 500;
    } else {
      pos = 0;
    }
    imgs.style.transform = `translateX(${pos}px)`;
  }, 3000);
}

let intervalId = autoSlide();

right.addEventListener("click", function () {
  clearInterval(intervalId);
  if (pos > -1500) {
    pos -= 500;
  } else {
    pos = 0;
  }
  imgs.style.transform = `translateX(${pos}px)`;
  intervalId = autoSlide();
});

left.addEventListener("click", function () {
  clearInterval(intervalId);
  if (pos < 0) {
    pos += 500;
  } else {
    pos = -1500;
  }
  imgs.style.transform = `translateX(${pos}px)`;
  intervalId = autoSlide();
});
