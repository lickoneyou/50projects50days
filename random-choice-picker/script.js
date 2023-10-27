const textarea = document.querySelector("#textarea");
const tags = document.querySelector("#tags");

let res = "";

textarea.addEventListener("keydown", function (e) {
  if (e.code == "Enter" && textarea.value) {
    random();
  }
});

textarea.addEventListener("keyup", function (e) {
  if (e.code != "Enter") {
    res = this.value;
    tags.innerHTML = res
      .split(",")
      .map((el) => (el && el != " " ? `<span class='tag'>${el}</span>` : ""))
      .join("");
  }
});

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let count = 0;
function random() {
  const tag = document.querySelectorAll(".tag");
  let id = setInterval(() => {
    count++;
    let randNum = randomIntFromInterval(0, tag.length - 1);
    console.log(randNum);
    if (count >= 50) {
      clearInterval(id);
      textarea.value = "";
      count = 0;
    }
    tag.forEach((el, ind) =>
      ind == randNum
        ? el.classList.add("highlight")
        : el.classList.remove("highlight")
    );
  }, 100);
}
