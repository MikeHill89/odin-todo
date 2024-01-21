export default class Project {
    static projectNames = ['Uncategorized'];
    static createProjectName(name) {
        Project.projectNames.push(name);
        return name;
    }
    constructor(name) {
        this.name = Project.createProjectName(name);
        return this.name;
    }
}

