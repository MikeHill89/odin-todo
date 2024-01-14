import Checklist from "./checklist";
import Project from "./project";
import * as todoActions from './todoactions';

class createTodo {
    static todoList = [];
    constructor(title, description, dueDate, priority, notes, checklist, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = new Checklist();
        
        // check if project name already exists in the static projectNames array
        const existingProjectIndex = Project.projectNames.indexOf(project);
        if (existingProjectIndex !== -1) {
            this.project = Project.projectNames[existingProjectIndex];
        } else{
            this.project = Project.createProjectName(project);
        }

        this.completed = false; 
    }

    changeTodoCompletion(){
        todoActions.completeTodo(this);
    }

    changeTodoTitle(){
        todoActions.changeTitle(this);
    }

    changeTodoDescription(){
        todoActions.changeDescription(this);
    }

    changeTodoDueDate(){
        todoActions.changeDueDate(this);
    }

    changeTodoPriority(){
        todoActions.changePriority(this);
    }

    changeTodoNotes(){
        todoActions.changeNotes(this);
    }
    addItemToTodoChecklist(){
        todoActions.addItemToChecklist(this);
    }
    removeItemFromTodoChecklist(){
        todoActions.removeItemFromChecklist(this);
    }
    toggleItemFromTodoCheckList(){
        todoActions.toggleItemInChecklist(this);
    }

    changeTodoProject(){
        todoActions.changeTodoProject(this);
    }
}
