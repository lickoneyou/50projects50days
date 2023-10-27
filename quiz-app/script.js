const question = document.querySelector("#question");
const label = document.querySelectorAll("label");
const submit = document.querySelector("#submit");
const input = document.querySelectorAll("input");
const quizContainer = document.querySelector(".quiz-container");

let count = 0;
let res = 0;

const data = [
  {
    question: "1+2=",
    answers: [
      [1, false],
      [2, false],
      [3, true],
      [4, false],
    ],
  },
  {
    question: "1+1=",
    answers: [
      [1, false],
      [2, true],
      [3, false],
      [4, false],
    ],
  },
  {
    question: "1+3=",
    answers: [
      [1, false],
      [2, false],
      [3, false],
      [4, true],
    ],
  },
];

question.textContent = data[0].question;
label.forEach((el, ind) => (el.textContent = data[0].answers[ind][0]));

submit.addEventListener("click", function () {
  let ans = "";
  input.forEach((el) => (el.checked ? (ans = el) : false));
  ans = document.querySelector(`label[for=${ans.id}]`).textContent;
  if (data[count].answers.filter((el) => el.includes(+ans))[0][1]) {
    res++;
  }
  if (count == data.length - 1) {
    endGame();
    return;
  }
  count++;
  question.textContent = data[count].question;
  label.forEach((el, ind) => (el.textContent = data[count].answers[ind][0]));
});

function endGame() {
  quizContainer.innerHTML = `
    <h2>You answered ${res}/${data.length} questions correctly</h2>
    <button onClick='location.reload()'>Reload</button>
    `;
}
