const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((el, ind) => {
  el.addEventListener("keydown", function (e) {
    if (e.key >= 0 && e.key <= 9) {
      codes[ind].value = "";
      setTimeout(() => codes[ind + 1]?.focus(), 1);
    } else if (e.code == "Backspace") {
      setTimeout(() => codes[ind - 1]?.focus(), 1);
    }
  });
});
