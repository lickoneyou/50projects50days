const background = document.querySelector("#background");
const password = document.querySelector("#password");

password.addEventListener("input", function () {
  background.style.filter = `blur(${20 - this.value.length * 2}px)`;
});
