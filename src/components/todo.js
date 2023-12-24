export class Todo {
    static todos = [];
    static nextId = 1;
    static getTodoById(id) {
        return Todo.todos.find(todo => todo.id === id);
    }
    static viewAll() {
        Todo.todos.forEach(todo => {
            console.log(`Todo ID: ${todo.id}`);
            for (const prop in todo) {
                if (todo.hasOwnProperty(prop)) {
                    console.log(`${prop}: ${todo[prop]}`);
                }
            }
            console.log('---'); // Add a separator for better readability
        });
    }
    static searchTodo() {
        const id = prompt('Enter the ID of the todo:');
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            console.log('Invalid ID. Please enter a valid number.');
            return null;
        }
        const foundTodo = Todo.todos.find(todo => todo.id === parsedId);
        if (foundTodo) {
            console.log('Found Todo:');

            console.log(`Title: ${foundTodo.title} | ID: ${foundTodo.id}`);
        } else {
            console.log(`Todo with ID ${parsedId} not found.`);
            return null;
        }
    }
    constructor(relatedProject, title, description, dueDate, prio, notes = '') {
        this.id = Todo.generateUniqueID()
        this.title = title;
        this.relatedProject = relatedProject;
        this.description = description;
        this.dueDate = dueDate;
        this.prio = prio;
        this.notes = notes;
        this.completed = false;
        Todo.todos.push(this);

    }
    static generateUniqueID() {
        const uniqueId = Todo.nextId++;
        return uniqueId;
    }
    complete() {
        this.completed = true;
    }
    setTitle(title) {
        this.title = title;
    }
    setDescription(description) {
        this.description = description;
    }
    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
    setPrio(prio) {
        this.prio = prio;
    }
    setNotes(notes) {
        this.notes = notes;
    }
    view() {
        for (const prop in this) {
            if (this.hasOwnProperty(prop)) {
                console.log(`${prop}: ${this[prop]}`);
            }
        }
    }
    delete() {
        const index = Todo.todos.indexOf(this);
        if (index !== -1) {
            Todo.todos.splice(index, 1);
            console.log(`Todo with ID ${this.id} has been deleted.`);
        } else {
            console.log(`Todo with ID ${this.id} not found.`);
        }
    }
}

