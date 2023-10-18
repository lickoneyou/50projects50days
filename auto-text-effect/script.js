const h1 = document.querySelector("#text");
const speed = document.querySelector("#speed");

const fullText = "We Love Programming!";

let i = 0;

h1.textContent = "";

function timer(delay = 1) {
  return setInterval(drowText, 1100 - delay * 100);
}

function drowText() {
  if (i < fullText.length) {
    h1.textContent += fullText[i];
    i++;
  } else {
    h1.textContent = "";
    i = 0;
  }
}

let myTimer = timer(1);

speed.addEventListener("click", function () {
  myTimer = timer(this.value);
  console.log(this);
});
