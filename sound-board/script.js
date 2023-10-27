const buttons = document.querySelector("#buttons");
const audio = document.querySelectorAll("audio");

const btnsTitle = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

for (let i = 0; i < btnsTitle.length; i++) {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = btnsTitle[i];
  btn.addEventListener("click", () => {
    audio.forEach((el) => el.pause());
    document.querySelector(`#${btnsTitle[i]}`).play();
  });
  buttons.append(btn);
}
