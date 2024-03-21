import Checklist from "./checklist.js";
import Project from "./project.js";
import * as todoActions from './todoactions.js';

export default class createTodo {
    static todoList = [];
    constructor(title, description, dueDate, priority, checklistItems, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = new Checklist(checklistItems);
        const existingProjectIndex = Project.projectNames.indexOf(project);
        this.project = (existingProjectIndex !== -1) ? project : Project.createProjectName(project);
        this.completed = false; 
        createTodo.addToTodolist(this);
    }
    static addToTodolist(todo){
        createTodo.todoList.push(todo);
    }

    changeTodoCompletion(){
        todoActions.completeTodo(this);
    }

    changeTodoTitle(newTitle){
        todoActions.changeTitle(this, newTitle);
    }

    changeTodoDescription(newDescription){
        todoActions.changeDescription(this, newDescription);
    }

    changeTodoDueDate(newDueDate){
        todoActions.changeDueDate(this,newDueDate);
    }

    changeTodoPriority(newPriority){
        todoActions.changePriority(this, newPriority);
    }

    addItemToCheckList(newItem){
        todoActions.addItemToChecklist(this.checklist, newItem);
    }
    removeItemFromTodoCheckList(itemToRemove){
        todoActions.removeItemFromChecklist(this, itemToRemove);
    }
    toggleItemFromTodoCheckList(toggledItem){
        todoActions.toggleItemInChecklist(this, toggledItem);
    }

    changeTodoProject(newProject){
        todoActions.changeTodoProject(this, newProject);
    }
}
