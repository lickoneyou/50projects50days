const btn = document.querySelector(".ripple");

btn.addEventListener("click", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  const span = document.createElement("span");
  span.classList.add("circle");
  span.style.top = y + "px";
  span.style.left = x + "px";
  btn.append(span);
  span.addEventListener("animationend", function name() {
    this.remove();
  });
});
