const API = "https://pokeapi.co/api/v2/pokemon/";
const pokeContainer = document.querySelector("#poke-container");

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

async function getPokemon() {
  const res = await fetch(API);
  const data = await res.json();
  data.results.forEach(async (el) => {
    const pokemonRes = await fetch(el.url);
    const pokemonData = await pokemonRes.json();
    createPokemon(
      pokemonData.sprites.front_default,
      pokemonData.name,
      pokemonData.id,
      pokemonData.types[0].type.name
    );
  });
}

getPokemon();

function createPokemon(pic, pokeName, id, pokeType) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  pokemon.style.background = colors[pokeType];
  pokeContainer.append(pokemon);

  const pokemonImgContainer = document.createElement("div");
  pokemonImgContainer.classList.add("img-container");
  pokemon.append(pokemonImgContainer);

  const img = document.createElement("img");
  img.src = pic;
  img.alt = pokeName;
  pokemonImgContainer.append(img);

  const info = document.createElement("div");
  info.classList.add("info");
  pokemon.append(info);

  const number = document.createElement("span");
  number.classList.add("number");
  number.textContent = idValidator(id);
  info.append(number);

  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = nameValidator(pokeName);
  info.append(name);

  const type = document.createElement("small");
  type.classList.add("type");
  info.append(type);

  const span = document.createElement("span");
  span.textContent = `Type: ${pokeType}`;
  type.append(span);
}

function idValidator(id) {
  if (id < 10) {
    return `#00${id}`;
  }
  if (id >= 10 && id < 100) {
    return `#0${id}`;
  } else {
    return `#${id}`;
  }
}

function nameValidator(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
