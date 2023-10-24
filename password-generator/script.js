function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateRamdonSym = () =>
  String.fromCharCode(randomIntFromInterval(33, 47));

const generateRamdonNum = () => randomIntFromInterval(0, 9);

const generateRamdonLowerCaseLetter = () =>
  String.fromCharCode(randomIntFromInterval(97, 122));

const generateRamdonUpperCaseLetter = () =>
  String.fromCharCode(randomIntFromInterval(65, 90));

const generate = document.querySelector("#generate");
const result = document.querySelector("#result");
const settings = document.querySelectorAll(".setting > input");
const clipboard = document.querySelector("#clipboard");

generate.addEventListener("click", generatePassword);

const fnArr = [
  generateRamdonUpperCaseLetter,
  generateRamdonLowerCaseLetter,
  generateRamdonNum,
  generateRamdonSym,
];

let res = "";

function generatePassword() {
  let v = [];
  let passLength = 0;
  res = "";
  settings.forEach((el) =>
    el.type == "checkbox" ? v.push(el.checked) : (passLength = el.value)
  );
  const functionArr = [];
  for (let i = 0; i < v.length; i++) {
    if (v[i]) {
      functionArr.push(fnArr[i]);
    }
  }

  for (let i = 0; i < passLength; i++) {
    let fn = functionArr[randomIntFromInterval(0, functionArr.length - 1)];
    res += fn();
  }
  result.textContent = res;
}

clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  document.body.append(textarea);
  textarea.value = res;
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  if (res.length) alert("Password copied to clipboard!");
});
