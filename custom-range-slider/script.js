const range = document.querySelector("#range");
const label = document.querySelector(".range-container > label");
label.style.left = "-30px";
let left = parseInt(label.style.left);

range.addEventListener("input", function () {
  label.textContent = this.value;
  let value = this.value * 2.8;

  label.style.left = `${left + value}` + "px";
});
