import { Todo } from './todo.js';

export function createNewTodo() {
    const relatedProject = prompt('Enter the related project: ');
    if (relatedProject === ''){
        relatedProject = 'Uncategorized';
    }
    const title = prompt('Enter the title: ');
    if (title === '') {
        alert('You must enter a title');
        prompt('Enter the title: ');
    }
    const description = prompt('Enter the description: ');
    const dueDate = prompt('Enter the due date (e.g., 2023-12-31): ');
    const prio = prompt('Enter the priority: ');
    const notes = prompt('Enter additional notes (optional): ');

    const newTodo = new Todo(relatedProject, title, description, dueDate, prio, notes);
    console.log(newTodo); 
    return newTodo;  // Return the created instance
}
