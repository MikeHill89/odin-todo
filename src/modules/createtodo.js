import { validateProject } from "./projectvalidator";

class createTodo {
    constructor(title, description, dueDate, priority, notes, checklist, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = false; 
        this.project = validateProject(project);
        //project validation module
    }
}
