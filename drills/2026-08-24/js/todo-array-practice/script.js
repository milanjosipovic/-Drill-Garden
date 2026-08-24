const inputText = document.querySelector("#todo-input");
const inputBtn = document.querySelector("#add-todo");
const clearBtn = document.querySelector("#clear-todos");
const todoArr = [];

inputBtn.addEventListener("click", function () {
  const todoText = inputText.value.trim();
  if (todoText !== "") {
    todoArr.push(todoText);

    displayTodos();

    inputText.value = "";
  }
});

function displayTodos() {
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";
  for (let i = 0; i < todoArr.length; i++) {
    const li = document.createElement("li");
    li.textContent = todoArr[i];
    todoList.appendChild(li);
  }
}

clearBtn.addEventListener("click", function () {
  todoArr.length = 0; // Clear the array
  displayTodos(); // Update the displayed list
});
