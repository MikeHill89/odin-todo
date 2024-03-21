import './css/style.css';
import './css/output.css';
import * as clickHandler from './modules/clickHandler.js';
import createTodo from './modules/createTodo.mjs';
import * as domHandler from './modules/domHandler.js';

const showAllTodos = () => {
    console.log(createTodo.todoList)
};

domHandler.renderInitialPage();
const todoModal = document.getElementById("model_addTodo");
const addTodoBtn = document.querySelectorAll(".addTodoBtn");

addTodoBtn.forEach(button => {
    button.addEventListener("click", function() {
        todoModal.showModal();
        domHandler.renderAddTodo;
    });
});

const submitTodoBtn = document.getElementById("submit-todo");
submitTodoBtn.addEventListener("click", function() {
    const title = document.getElementById("todo-title");
    const description = document.getElementById("todo-description");
    const priority = document.getElementById("todo-priority");
    const duedate = document.getElementById("todo-duedate");
    new createTodo(title.value, description.value, duedate.value, priority.value);
    title.value = "";
    description.value = "";
    duedate.value = "";
    priority.value ="";
    showAllTodos();
    domHandler.renderAllTodos();
}
);
