import htmlModules from './initializePage';
export function renderAddTodo(){
    const modal = document.querySelector(".modal-box");
    modal.innerHTML = htmlModules.todo;  
}

