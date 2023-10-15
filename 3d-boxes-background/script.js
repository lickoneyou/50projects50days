const btn = document.querySelector("#btn");
const boxes = document.querySelector("#boxes");

btn.addEventListener("click", () => boxes.classList.toggle("big"));

const createBox = () => {
  let pos = 0;
  for (let i = 1; i < 17; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    if (i <= 4) {
      box.style.backgroundPosition = `${pos}px 0px`;
      boxes.append(box);
      pos -= 125;
    }

    if (i >= 5 && i <= 8) {
      if (i == 5) {
        pos = 0;
      }
      box.style.backgroundPosition = `${pos}px -125px`;
      boxes.append(box);
      pos -= 125;
      if (i == 8) {
        pos = 0;
      }
    }

    if (i > 8 && i <= 12) {
      if (i == 9) {
        pos = 0;
      }
      box.style.backgroundPosition = `${pos}px -250px`;
      boxes.append(box);
      pos -= 125;
      if (i == 8) {
        pos = 0;
      }
    }

    if (i > 12 && i <= 16) {
      if (i == 13) {
        pos = 0;
      }
      box.style.backgroundPosition = `${pos}px -375px`;
      boxes.append(box);
      pos -= 125;
      if (i == 8) {
        pos = 0;
      }
    }
  }
};

createBox();
