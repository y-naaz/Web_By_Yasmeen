//Create array to store todos
//When we click add
//get text from textbox
//add it to array

const todo2 = [];
function add2() {
  const v2 = document.querySelector(".js-input2").value;
  todo2.push(v2);
  document.querySelector(".js-input2").value = "";
  renderTodoList();
}
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todo2.length; i++) {
    const todo = todo2[i];
    const html1 = `
          <p>
          ${todo}
          <button onclick="
            todo2.splice(${i},1);
            renderTodoList();

          ">
          Delete
          </button>
          </p>`;
    //now we will combine all of HTML code together and put it on the webpage. To combine the HTML together we are gonna use Accumulator pattern
    todoListHTML += html1;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

const todoL = [{ name: "", dueDate: "" }];
function addL() {
  const name = document.querySelector(".js-input3").value;

  const todoDateEle = document.querySelector(".js-input-date");
  const dueDate = todoDateEle.value;
  todoL.push({
    name: name,
    dueDate: dueDate,
  });
  document.querySelector(".js-input3").value = "";
  document.querySelector(".js-input-date").value = "";
  renderTodoList2();
}
function renderTodoList2() {
  let todoListHTML = "";
  for (let i = 0; i < todoL.length; i++) {
    const todoobject = todoL[i];
    const name = todoobject.name;
    const dueDate = todoobject.dueDate;
    //or const {name,dueDate} =todoobject; works the same as above
    if (name.trim() !== "") {//without using it i was getting a default delete button on the page
      /*
      name.trim(): The trim() method removes whitespace from both ends of a string. It doesn't modify the original string; instead, it returns a new string with the whitespace removed.

!== '': This checks if the trimmed name is not an empty string. The !== operator means "not equal to", and '' represents an empty string.

Putting these together:

name.trim() removes any leading and trailing whitespace from the name variable.
!== '' checks if the trimmed name is not an empty string.
So, name.trim() !== '' ensures that the name variable contains at least one non-whitespace character. If the name variable contains only whitespace characters (or is an empty string), the condition will be false, and the delete button won't be rendered for that todo item.
      
      */
      const html2 = `
          <div class="added-d">${name}</div>
           <div class="added-d">${dueDate}</div>
           <div>
          <button class="todo-delete" onclick="
            todoL.splice(${i},1);
            renderTodoList2();

          ">
          Delete
          </button>
          </div>`;
      //now we will combine all of HTML code together and put it on the webpage. To combine the HTML together we are gonna use Accumulator pattern
      todoListHTML += html2;
    }
  }
  document.querySelector(".js-todo-list-last").innerHTML = todoListHTML;
}
document.addEventListener("DOMContentLoaded", function () {
  renderTodoList2();
});


    
