const empty = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");

empty.forEach((el) => {
  el.addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  el.addEventListener("drop", function (event) {
    const cl = event.dataTransfer.getData("class");
    this.append(document.querySelector(`.${cl}`));
    event.target.classList.remove("hovered");
  });
  el.addEventListener("dragenter", function (event) {
    event.target.classList.add("hovered");
  });
  el.addEventListener("dragleave", function (event) {
    event.target.classList.remove("hovered");
  });
});

fill.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("class", event.target.className);
});
