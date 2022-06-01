window.addEventListener("load", (event) => {
  let input = document.querySelector("input");
  let button = document.querySelector("button");
  let form = document.querySelector("form");
  let todoContainer = document.getElementById("todo-row");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    var task = input.value;
    if (!task) {
      alert("You haven't made any Todo list ");
      return;
    }

    // var paragraph = document.createElement("p");

    // paragraph.innerText = task;

    // todoContainer.appendChild(paragraph);

    todoContainer.innerHTML += `
        <div class="todo-row todo-rowContainer" >
            <span class="todo-list">${task}</span>
           
            <button class="todo__delete"><i class="uil uil-trash-alt"></i></button>
            
        </div>
    `;

    var todoDelete = document.querySelectorAll(".todo__delete");
    for (var i = 0; i < todoDelete.length; i++) {
      todoDelete[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var todoList = document.querySelectorAll(".todo-list");
    for (var i = 0; i < todoList.length; i++) {
      todoList[i].onclick = function () {
        this.classList.toggle("complete");
      };
    }

    input.value = " ";
  });
});

function removeAll() {
  document.querySelector(".todo-row").innerHTML = "";
}
