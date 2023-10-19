const counters = document.querySelectorAll(".counter");

counters.forEach((el) => {
  let count = 0;
  console.log(el.dataset.target);
  let id = setInterval(() => {
    count += el.dataset.target * 0.01;
    if (el.dataset.target <= count) {
      clearInterval(id);
    }
    el.textContent = count;
  }, 0.01);
});
