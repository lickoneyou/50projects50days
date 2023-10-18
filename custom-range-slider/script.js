const range = document.querySelector("#range");
const label = document.querySelector(".range-container > label");

range.addEventListener("input", function () {
  label.textContent = this.value;
  label.style.left = `${-30 + (this.value / 100) * 280}` + "px";
});
