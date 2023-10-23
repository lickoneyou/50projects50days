const API = "https://randomuser.me/api?results=50";
const result = document.querySelector("#result");
const filter = document.querySelector("#filter");

const users = [];

async function getUsers() {
  const res = await fetch(API);
  const data = await res.json();
  result.innerHTML = "";
  data.results.forEach((el) => {
    users.push({
      firstName: el.name.first,
      lastName: el.name.last,
      state: el.location.state,
      country: el.location.country,
      img: el.picture.medium,
    });
    createUser({
      firstName: el.name.first,
      lastName: el.name.last,
      state: el.location.state,
      country: el.location.country,
      img: el.picture.medium,
    });
  });
}

getUsers();

function createUser(user) {
  result.innerHTML += `
    <li>
       <img src=${user.img} alt=${user.firstName}/>
       <div class='user-info'>
       <h4>${user.firstName} ${user.lastName}</h4>
       <p>${user.state}, ${user.country}</p>
       </div>
    </li>
    `;
}

filter.addEventListener("input", function () {
  const res = users.filter(
    (el) =>
      `${el.firstName} ${el.lastName}`
        .toLowerCase()
        .includes(this.value.toLowerCase()) ||
      `${el.state}, ${el.country}`
        .toLowerCase()
        .includes(this.value.toLowerCase())
  );
  result.innerHTML = "";
  res.forEach((el) => {
    createUser(el);
  });
});
