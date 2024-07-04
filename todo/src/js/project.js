class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodoAt(index) {
    this.todos.splice(index, 1);
  }
}

export default Project;
