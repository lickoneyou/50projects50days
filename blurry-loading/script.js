const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let blur = 30;
let opacity = 0.99;
let text = 0;

bg.style.filter = "blur(30px)";
loadingText.style.opacity = "0.99";

const id = setInterval(() => {
  if (text == 99) {
    clearInterval(id);
  }
  text++;
  blur -= 0.3;
  bg.style.filter = `blur(${blur}px)`;
  opacity -= 0.01;
  loadingText.style.opacity = `${opacity}`;
  loadingText.textContent = `${text}%`;
}, 50);
