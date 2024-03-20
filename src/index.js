import './css/style.css';
import './css/output.css';
import createTodo from './modules/createTodo.mjs';
import htmlModules from './modules/initializePage';
import { renderAddTodo } from './modules/domHandler.js';

const showAllTodos = () => {
    console.log(createTodo.todoList)
};

const app = document.getElementById("app");

app.innerHTML = htmlModules.nav + htmlModules.main + htmlModules.modalTodo + htmlModules.footer;

const todoModal = document.getElementById("model_addTodo");
const addTodoBtn = document.querySelectorAll(".addTodoBtn");

addTodoBtn.forEach(button => {
    button.addEventListener("click", function() {
        todoModal.showModal();
        renderAddTodo;
    });
});


