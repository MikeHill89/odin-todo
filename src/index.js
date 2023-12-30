import { addButton, viewAllButton, renderAllProjects } from './components/controller.js';
import { createNewTodo } from './components/createTodo.js';
import { Todo } from './components/todo.js';

console.log("Hello World!");
addButton.addEventListener('click',createNewTodo);
viewAllButton.addEventListener('click',renderAllProjects);

