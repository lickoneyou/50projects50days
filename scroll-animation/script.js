const box = document.querySelectorAll(".box");

function onEntry(entries) {
  entries.forEach((entry) => {
    console.log(entry.target.style.transform);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);

for (let elm of box) {
  observer.observe(elm);
}
