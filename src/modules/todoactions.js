import Checklist from "./checklist";
import Project from "./project";

export function completeTodo(todo) {
    return todo.completed = !todo.completed;
}

export function changeTitle(todo, title) {
    if (title === null) {
        return alert('Title cannot be empty');
    } else {
        todo.title = title;
    }
}

export function changeDescription(todo, description) {
    todo.description = description;
}

export function changeDueDate(todo, dueDate) {
    if (dueDate === null) {
        return alert('You must specify a due date');
    } else {
        todo.dueDate = dueDate;
    }
}

export function changePriority(todo, priority) {
    if (priority !== 'Low' && priority !== 'Medium' && priority !== 'High') {
        return alert('No valid priority received');
    } else {
        todo.priority = priority;
    }
}

export function changeNotes(todo, notes) {
    todo.notes = notes;
}

export function addItemToChecklist(todo, description) {
    if (todo.checklist instanceof Checklist) {
        todo.checklist.addItem(description);
    }
}

export function removeItemFromChecklist(todo, index) {
    if (todo.checklist instanceof Checklist) {
        todo.checklist.removeItem(index);
    }
}

export function toggleItemInChecklist(todo, index) {
    if (todo.checklist instanceof Checklist) {
        todo.checklist.toggleItem(index);
    }
}

export function changeTodoProject(todo, project) {
    if (!project || project.trim() === ""){
        return todo.project = 'Uncategorized';
    }
    const existingProjectIndex = Project.projectNames.indexOf(project);
    if (existingProjectIndex !== -1) {
        return todo.project = Project.projectNames[existingProjectIndex];
    } else {
        Project.projectNames.push(project);
        return todo.project = project;
    }
}

