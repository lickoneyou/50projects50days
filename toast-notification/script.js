const toasts = document.querySelector("#toasts");
const btn = document.querySelector(".btn");

btn.addEventListener("click", addToast);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const numbersArr = ["One", "Two", "Three", "Four", "Five"];
const randClass = ["info", "success", "error"];

function addToast() {
  const toast = document.createElement("div");
  toast.classList.add(
    "toast",
    randClass[randomIntFromInterval(0, randClass.length - 1)]
  );
  toast.textContent = `Message ${
    numbersArr[randomIntFromInterval(0, numbersArr.length - 1)]
  }`;
  toasts.append(toast);
  setTimeout(() => {
    toast.remove();
  }, 1500);
}
