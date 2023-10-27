const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseover", () => container.classList.add("hover-left"));
left.addEventListener("mouseout", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseover", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseout", () =>
  container.classList.remove("hover-right")
);
