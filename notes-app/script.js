const add = document.querySelector("#add");
const body = document.body;

localStorage.getItem("notes")
  ? false
  : localStorage.setItem("notes", JSON.stringify([]));

function createNote(textareaValue = "") {
  const divWrapper = document.createElement("div");
  divWrapper.classList.add("note");
  const divTools = document.createElement("div");
  divTools.classList.add("tools");
  divWrapper.append(divTools);
  const edit = document.createElement("button");
  edit.classList.add("edit");
  divTools.append(edit);
  const editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-edit");
  edit.append(editIcon);
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  divTools.append(deleteBtn);
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash-alt");
  deleteBtn.append(deleteIcon);
  const main = document.createElement("div");
  main.classList.add("main", "hidden");
  divWrapper.append(main);
  const textarea = document.createElement("textarea");
  textarea.value =
    textareaValue == "[object PointerEvent]" ? "" : textareaValue;
  textarea.addEventListener("input", () => addStore(textarea));
  divWrapper.append(textarea);
  deleteBtn.addEventListener("click", () => {
    deleteNote(divWrapper, textarea.value);
  });
  edit.addEventListener("click", () => toggleHidden(main, textarea));
  body.append(divWrapper);
}

add.addEventListener("click", createNote);

function deleteNote(note, value) {
  let getItems = JSON.parse(localStorage.getItem("notes"));
  localStorage.setItem(
    "notes",
    JSON.stringify([...getItems.filter((el) => el != value)])
  );
  note.remove();
}

function toggleHidden(main, textarea) {
  main.classList.toggle("hidden");
  textarea.classList.toggle("hidden");
  main.textContent = textarea.value;
}

function addStore(textarea) {
  const value = [];
  document.querySelectorAll("textarea").forEach((el) => value.push(el.value));
  localStorage.setItem("notes", JSON.stringify(value));
}

function getStorage() {
  let parse = JSON.parse(localStorage.getItem("notes"));
  if (parse.some((el) => el) && parse.length) {
    parse.forEach((el) => createNote(el));
  }
}

getStorage();
