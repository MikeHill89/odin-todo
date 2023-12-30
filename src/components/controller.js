import { Todo } from './todo.js';
export const addButton = document.getElementById("addTodo");
export const viewAllButton = document.getElementById("viewAll");

export function renderAllProjects(){
    console.log("rendering all projects");
    const main = document.getElementById("main"); 
    main.textContent = "";
    Todo.todos.forEach(todo => {
        const p = document.createElement("p");
        p.textContent = todo.title;
        main.appendChild(p);
    });
}
