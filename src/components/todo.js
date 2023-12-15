class Todo {
    static todos = [];
    constructor(title, description, dueDate, priority, notes = '', checklist = []) {
        this.id = Todo.generateId();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist.map(item => ({ text: item, completed: false }));
        this.completed = false;
        Todo.todos.push(this);
    }
    complete() {
        this.completed = true;
        // Mark all checklist items as completed
        this.checklist.forEach(item => {
            item.completed = true;
        });
    }

    completeCheckListItem(index) {
        if (index >= 0 && index < this.checklist.length) {
            this.checklist[index].completed = true;
        }
    }

    function() {
    }
    static generateId() {
        return new Date().getTime();
    }
}

function createCheckList() {
    const checklist = [];
    let addChecklistItem = true;

    while (addChecklistItem) {
        const checklistItem = prompt('Enter a checklist item (press Enter to finish):');
        if (checklistItem.trim() !== '') {
            checklist.push({ text: checklistItem, completed: false });
        } else {
            addChecklistItem = false;
        }
    }

    return checklist;
}

function createNewTudo(todo){
    const title = prompt("Enter the title:");
    const description = prompt("Enter the description:");
    const dueDate = prompt("Enter due date (YYYY-MM-DD):");
    const priority = prompt("Enter the priority:");
    const notes = prompt("Enter any additional notes:");
    const checklist = createCheckList();
    todo =  new Todo(title,description,dueDate,priority,notes, checklist);

    return todo
}
function showAllTodos(){
    return Todo.todos;
}
window.showAllTodos = showAllTodos;

export {Todo, createNewTudo, showAllTodos};
