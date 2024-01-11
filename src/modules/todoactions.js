export function completeTodo(todo){
    todo.completed = true;
}

export function changeTitle(todo,title){
    if (title === null){
        return alert('Title cannot be empty');
    } else {
        todo.title = title;
    }
}

export function changeDescription(todo, description){
    todo.description = description;
}

export function changeDueDate(todo, dueDate){
    todo.dueDate = dueDate;
}

export function changePriority(todo,priority) {
    if (priority !== 'Low' || priority !== 'Medium' || priority !== 'High'){
        return alert('No valid priority received');
    } else {
        todo.priority = priority;
    }
}
// add changeNote and checkList function maybe put the checklist functions in a
// separate module for creation, modification and deletion??
