export default class Project {
    static projectNames = ['Uncategorized'];

    static createProjectName(name) {
        if (!name || name.trim() === '') {
            return 'Uncategorized';
        }
        // check if the projectName already exists in the static projectNames
        // array or if it's value is Uncategorized'
        if (Project.projectNames.includes(name) && name === 'Uncategorized') {
            return 'Name already exists';
        }

        Project.projectNames.push(name);
        return name;
    }

    constructor(name) {
        this.name = Project.createProjectName(name);
    }
}

