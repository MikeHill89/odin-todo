import htmlModules from './initializePage';
import createTodo from './createTodo.mjs';

export function renderAddTodo() {
    const modal = document.querySelector(".modal-box");
    modal.innerHTML = htmlModules.todo;
}

export function renderAllTodos() {
    const view = document.querySelector(".hero-content");
    view.innerHTML = "";
    createTodo.todoList.forEach(todo => {
        const card = document.createElement("div");
        card.innerHTML = htmlModules.todoCard;
        const cardTitle = card.querySelector(".card-title");
        const cardDescription = card.querySelector(".card-description");
        const cardPriority = card.querySelector(".card-priority");
        const cardDueDate = card.querySelector(".card-duedate");
        if (todo.title) {
            cardTitle.textContent = todo.title;
        }
        if (todo.description) {
            cardDescription.textContent = todo.description;
        }
            cardPriority.innerText = todo.priority;
        if (cardPriority.innerText === "Medium"){
            cardPriority.classList.add("badge-warning");
        }
        if (cardPriority.innerText === "High"){
            cardPriority.classList.add("badge-error");
        } else{
            cardPriority.classList.add("badge-info");
        }
            cardDueDate.textContent = todo.dueDate;
        view.appendChild(card);
    });
}

export function renderInitialPage() {
    const app = document.getElementById("app");
    app.innerHTML = htmlModules.nav + htmlModules.main + htmlModules.modalTodo + htmlModules.footer;
}

