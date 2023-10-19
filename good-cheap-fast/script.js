const inps = document.querySelectorAll(".toggle");
const body = document.body;

body.addEventListener("click", function (e) {
  if (e.target.classList.contains("toggle")) {
    if (inps[0].checked && inps[1].checked && e.target == inps[2]) {
      inps[1].checked = false;
      inps[2].checked = true;
    }
    if (inps[0].checked && inps[2].checked && e.target == inps[1]) {
      inps[0].checked = false;
      inps[1].checked = true;
    }
    if (inps[1].checked && inps[2].checked && e.target == inps[0]) {
      inps[0].checked = true;
      inps[2].checked = false;
    }
  }
});
