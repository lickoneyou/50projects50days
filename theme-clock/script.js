const toggleBtn = document.querySelector(".toggle");
const html = document.querySelector("html");
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const time = document.querySelector(".time");
const date = document.querySelector(".date");

const circle = document.createElement("span");
circle.classList.add("circle");

const calendarDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const calendarMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggleBtn.addEventListener("click", () => html.classList.toggle("dark"));

setInterval(() => {
  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();
  second.style.transform = `translate(-50%, -100%) rotate(${s * 6}deg)`;
  minute.style.transform = `translate(-50%, -100%) rotate(${m * 6}deg)`;
  hour.style.transform = `translate(-50%, -100%) rotate(${h * 30}deg)`;

  time.textContent = `${h}:${m < 10 ? "0" + m : m} ${h > 12 ? "PM" : "AM"}`;

  const day = calendarDay[new Date().getDay()];
  const month = calendarMonth[new Date().getMonth()];
  const numDay = new Date().getDate();

  date.textContent = `${day}, ${month}`;
  date.append(circle);
  circle.textContent = numDay;
}, 1000);
