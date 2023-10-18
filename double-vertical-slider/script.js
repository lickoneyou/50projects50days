const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");

leftSlide.style.top = "-300vh";
let leftPos = 0;
let rightPos = 0;

upButton.addEventListener("click", () => {
  leftPos += window.innerHeight;
  rightPos -= window.innerHeight;
  if (leftPos == window.innerHeight * 4) {
    leftPos = 0;
    rightPos = 0;
  }
  leftSlide.style.transform = `translateY(${leftPos}px)`;
  rightSlide.style.transform = `translateY(${rightPos}px)`;
});

downButton.addEventListener("click", () => {
    leftPos -= window.innerHeight;
    rightPos += window.innerHeight;
    console.log(leftPos, rightPos);
    if (leftPos < 0) {
      leftPos = window.innerHeight * 3;
      rightPos = -window.innerHeight * 3;
    }
    leftSlide.style.transform = `translateY(${leftPos}px)`;
    rightSlide.style.transform = `translateY(${rightPos}px)`;
  });
