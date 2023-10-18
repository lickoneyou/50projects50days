const img = document.querySelector(".loveMe");
const times = document.querySelector("#times");
let counter = 0;

img.addEventListener("dblclick", function (e) {
  const x = e.offsetX;
  const y = e.offsetY;

  times.textContent = ++counter;
  const span = document.createElement("span");
  span.classList.add("fa-heart", 'fas');
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;

  img.append(span);
  span.addEventListener("animationend", function () {
    span.remove();
  });
});
