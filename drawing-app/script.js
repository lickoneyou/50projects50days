const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const w = canvas.width;
const h = canvas.height;

const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const size = document.querySelector("#size");
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => context.clearRect(0, 0, w, h));

decrease.addEventListener("click", () =>
  size.textContent > 5 ? (size.textContent = size.textContent - 5) : false
);

increase.addEventListener("click", () =>
  size.textContent < 50 ? (size.textContent = +size.textContent + 5) : false
);

const mouse = { x: 0, y: 0 };
let draw = false;

canvas.addEventListener("mousedown", function (e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  draw = true;
  context.beginPath();
  context.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener("mousemove", function (e) {
  let color = document.querySelector("#color");
  context.strokeStyle = color.value;
  console.log(context);
  context.lineWidth = +size.textContent;
  if (draw == true) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
  }
});

canvas.addEventListener("mouseup", function (e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  context.lineTo(mouse.x, mouse.y);
  context.stroke();
  context.closePath();
  draw = false;
});
