const API = "https://api.github.com/users/";
const main = document.querySelector("main");
const search = document.querySelector("#search");
const form = document.querySelector("#form");

function drowCard(avatar, name, followers, following, repos, repositories) {
  main.innerHTML = `
    <div class='card'>
      <div>
        <img class='avatar' src=${avatar} alt='avatar'/>
      </div>
      <div class='user-info'>
        <h2>${name}</h2>
        <ul>
          <li>${followers} <strong>Followers</strong></li>
          <li>${following} <strong>Following</strong></li>
          <li>${repos} <strong>Repos</strong></li>
        </ul>
        <div class='repos'>
        ${repositories
          .map(
            (el) =>
              `<a class="repo" href=${el.html_url} target="_blank">${el.name}</a>`
          )
          .join("")}
        </div>
      </div>
    </div>
    `;
}

async function getUser(user) {
  try {
    const userRes = await fetch(API + user);
    const repoRes = await fetch(`${API}${user}/repos`);
    const dataUser = await userRes.json();
    const dataRepo = await repoRes.json();
    drowCard(
      dataUser.avatar_url,
      dataUser.name,
      dataUser.followers,
      dataUser.following,
      dataUser.public_repos,
      dataRepo.splice(0, 5)
    );
  } catch (e) {
    main.innerHTML = "<div class='card'>No profile with this username</div>";
    console.clear();
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getUser(search.value);
  search.value = ''
});
