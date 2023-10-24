const API = "https://api.jikan.moe/v4/anime?q=naruto";
const main = document.querySelector("main");
const search = document.querySelector("#search");

async function getData(fil = "") {
  const res = await fetch(API);
  const data = await res.json();
  const filter = data.data.filter((el) =>
    el.title.toLowerCase().includes(fil.toLowerCase())
  );
  console.log(filter);
  filter.forEach((el) => {
    createMovie(el);
  });
}

function createMovie(el) {
  const container = document.createElement("div");
  container.classList.add("movie");
  const img = document.createElement("img");
  img.classList.add("picture");
  img.src = el.images.jpg.image_url;
  img.alt = el.title;
  container.append(img);
  const title = document.createElement("h3");
  title.classList.add("title");
  title.textContent = el.title;
  container.append(title);
  const link = document.createElement("a");
  link.classList.add("link");
  link.textContent = "Open";
  link.href = el.url;
  link.target = "_blank";
  container.append(link);
  main.append(container);
}

getData();

search.addEventListener("input", function () {
  setTimeout(() => {
    main.innerHTML = "";
    getData(this.value);
  }, 500);
});
