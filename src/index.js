import './css/style.css';
import './css/output.css';
import createTodo from './modules/createTodo.mjs';
import htmlModules from './modules/domHandler';

const todo = new createTodo(
    'Test Title',
    'Test Description',
    '2022-01-17',
    'High',
    'Test Notes',
    ['Item1', 'Item2'],
    'New Project'
);
const todo2 = new createTodo(
    'Test Title',
    'Test Description',
    '2022-01-17',
    'High',
    'Test Notes',
    ['Item1', 'Item2'],
    'New Project'
);

const showAllTodos = () =>  {
    console.log(createTodo.todoList)
};

const app = document.getElementById("app");

app.innerHTML = htmlModules.nav + htmlModules.main + htmlModules.footer;
