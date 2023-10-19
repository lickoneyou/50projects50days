// 500
const container = document.querySelector("#container");
const collors = ["orange", "red", "blue", "green", "yellow", "pink"];

for (let i = 0; i < 500; i++) {
  container.innerHTML += '<div class="square"></div>';
}

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("square")) {
    const color = collors[Math.floor(Math.random() * collors.length)];
    e.target.style.background = color;
    e.target.style.boxShadow = `${color} 0px 0px 2px`;
  }
});

container.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("square")) {
    e.target.style.background = "#1d1d1d";
    e.target.style.boxShadow = `rgb(0, 0, 0) 0px 0px 2px`;
  }
});
