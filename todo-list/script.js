const input = document.querySelector("#input");
const todos = document.querySelector("#todos");
const form = document.querySelector("#form");

localStorage.getItem("todos")
  ? false
  : localStorage.setItem("todos", JSON.stringify([]));

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    localStorage.setItem(
      "todos",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("todos")),
        { text: input.value, completed: false },
      ])
    );
    createTodo();
    input.value = "";
  }
});

function createTodo() {
  const todosStorage = JSON.parse(localStorage.getItem("todos"));
  todos.innerHTML = "";
  todosStorage.forEach((el) => {
    const li = document.createElement("li");
    el.completed ? li.classList.add("completed") : false;
    li.addEventListener("click", function () {
      this.classList.toggle("completed");

      const todo = document.querySelectorAll("#todos *");
      const arr = [];
      todo.forEach((el) =>
        arr.push({ text: el.textContent, completed: el.className })
      );
      localStorage.setItem("todos", JSON.stringify(arr));
    });
    li.textContent = el.text;
    li.style.userSelect = "none";
    todos.append(li);
  });
}

createTodo();
