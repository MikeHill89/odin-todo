import { Todo } from './components/todo.js';
import { createNewTudo } from './components/todo.js';
import { showAllTodos } from './components/todo.js';
// constructor(title, description, dueDate, priority, notes = '', checklist=[]) {

let todo1 = new Todo('Test1','this is a test description', '12-12-23',['item1','item2','item3'])
console.log(todo1);
todo1.complete()
console.log(todo1);
let todoFromConsole = createNewTudo();
console.log(todoFromConsole);
console.log(showAllTodos());
