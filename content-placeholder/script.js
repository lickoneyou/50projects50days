const cardHeader = document.querySelector(".card-header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const allElements = document.querySelectorAll("body *");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

setTimeout(() => {
  allElements.forEach((el) =>
    el.classList.remove("animated-bg", "animated-bg-text")
  );
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80";
  img.alt = "headerBG";
  cardHeader.append(img);

  title.textContent = "Lorem ipsum dolor sit amet";

  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";

  name.textContent = "John Doe";
  date.textContent = "Oct 08, 2020";
}, 2000);
