window.addEventListener("load", (event) => {
  let input = document.querySelector("input");
  let button = document.querySelector("button");
  let form = document.querySelector("form");
  let todoContainer = document.getElementById("todo-row");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("You haven't made any Todo list ");
      return;
    }

    var paragraph = document.createElement("li");

    paragraph.innerText = task;

    todoContainer.appendChild(paragraph);
  });
});
