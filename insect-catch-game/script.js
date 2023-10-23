const startBtn = document.querySelector("#start-btn");
const screen = document.querySelectorAll(".screen");
const insectsList = document.querySelector(".insects-list");
const gameContainer = document.querySelector("#game-container");
const scoreHTML = document.querySelector("#score");
const time = document.querySelector("#time");
const message = document.querySelector("#message");

startBtn.addEventListener("click", () => {
  screen[0].classList.add("up");
});

let insect = "";
let score = 0;
let min = 0;
let sec = 0;

insectsList.addEventListener("click", function (event) {
  if (
    event.target.nodeName == "BUTTON" ||
    event.target.closest(".choose-insect-btn")
  ) {
    insect = event.target
      .closest(".choose-insect-btn")
      .querySelector("img").src;
    screen[1].classList.add("up");
    generateInsect();
    setInterval(() => {
      if (score >= 20) {
        message.classList.add("visible");
      }
      if (sec < 60) {
        sec++;
      } else {
        sec = 0;
        min++;
      }
      time.textContent = `Time: ${min < 10 ? "0" + min : min}:${
        sec < 10 ? "0" + sec : sec
      }`;
    }, 1000);
  }
});

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateInsect() {
  const div = document.createElement("div");
  div.classList.add("insect");
  div.style.left = `${randomIntFromInterval(0, window.innerWidth)}px`;
  div.style.top = `${randomIntFromInterval(0, window.innerHeight)}px`;
  const img = document.createElement("img");
  img.src = insect;
  img.alt = "insect";
  div.append(img);
  gameContainer.appendChild(div);
  div.addEventListener("click", function () {
    setTimeout(() => {
      generateInsect();
    }, 500);
    setTimeout(() => {
      generateInsect();
    }, 1000);
    score++;
    scoreHTML.innerHTML = `Score: ${score}`;
    this.classList.add("caught");
  });
  div.addEventListener("animationend", function () {
    this.remove();
  });
}

console.log(window);
