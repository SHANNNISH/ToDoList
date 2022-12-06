addButton = document.getElementById("add-button");
todoContainer = document.getElementById("todo-container");
todoInput = document.getElementById("todo-input");

addButton.addEventListener("click", (e) => {
  let todo = document.createElement("div");
  todo.classList.add("todo");

  let li = document.createElement("li");
  li.innerText = `${todoInput.value}`;
  todo.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("todo-check");
  todo.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
  deleteButton.classList.add("todo-delete");
  todo.appendChild(deleteButton);

  if (todoInput.value === "") {
    alert(" Please Enter Some Text");
  } else {
    todoContainer.appendChild(todo);
  }

  todoInput.value = "";
});

todoContainer.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("todo-delete")) {
    let item = target.parentElement;
    item.remove();
  }

  if (target.classList.contains("todo-check")) {
    let item = target.parentElement;
    item.classList.toggle("completed");
  }
});
