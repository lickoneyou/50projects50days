const url = "https://source.unsplash.com/random/";
const container = document.querySelector(".container");

async function addRandomPic() {
  const res = await fetch(url);
  container.innerHTML += `<img src=${res.url} alt='pic'>`;
}

for (let i = 0; i < 15; i++) {
  addRandomPic();
}
