const jokes = [
  "What kind of music do mummy's like? Rap",
  "What do you call a pig that knows karate? A pork chop!",
  "Conjunctivitis.com – now that’s a site for sore eyes.",
  "I got an A on my origami assignment when I turned my paper into my teacher",
  "What do you call corn that joins the army? Kernel.",
  "Whiteboards ... are remarkable.",
];

const joke = document.querySelector("#joke");
const btn = document.querySelector("#jokeBtn");

const genereteJoke = () => {
  joke.textContent = jokes[Math.floor(Math.random() * jokes.length)];
};

genereteJoke()

btn.addEventListener("click", genereteJoke);
