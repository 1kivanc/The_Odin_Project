import Project from "./project";
import Todo from "./todo";

export const saveToLocalStorage = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const loadFromLocalStorage = () => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  return projects.map((project) => {
    const newProject = new Project(project.name);
    project.todos.forEach((todo) => {
      newProject.addTodo(
        new Todo(todo.title, todo.description, todo.dueDate, todo.priority)
      );
    });
    return newProject;
  });
};
