import { saveToLocalStorage, loadFromLocalStorage } from "./storage";
import Project from "./project";
import Todo from "./todo";
import { format } from "date-fns";

let projects = [];
let selectedProjectIndex = 0;

const renderProjects = (projects) => {
  const projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = "";
  projects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project";
    projectElement.innerHTML = `
      <h2>${project.name}</h2>
      <button onclick="deleteProject(${index})">Projeyi Sil</button>
      <button onclick="selectProject(${index})">Todoları Görüntüle</button>
    `;
    projectsList.appendChild(projectElement);
  });
};

const renderTodos = (todos) => {
  const todosList = document.getElementById("todos-list");
  todosList.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoElement = document.createElement("div");
    todoElement.className = "todo";
    todoElement.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <p>Bitiş: ${todo.dueDate}</p>
      <p>Öncelik: ${todo.priority}</p>
      <button onclick="deleteTodoFromUI(${index})">Todoyu Sil</button>
    `;
    todosList.appendChild(todoElement);
  });

  const addTodoButton = document.getElementById("add-todo-btn-view-todos");
  addTodoButton.style.display = "block";
};

const addProject = (name) => {
  const project = new Project(name);
  projects.push(project);
  saveToLocalStorage(projects);
  renderProjects(projects);
};

const addTodo = (projectIndex, todo) => {
  projects[projectIndex].addTodo(todo);
  saveToLocalStorage(projects);
  renderTodos(projects[projectIndex].todos);
  hideAddTodoForm();
};

const deleteProject = (index) => {
  projects.splice(index, 1);
  saveToLocalStorage(projects);
  renderProjects(projects);
  document.getElementById("todos-list").innerHTML = "";
};

const deleteTodoFromUI = (index) => {
  const projectIndex = selectedProjectIndex;
  projects[projectIndex].removeTodoAt(index);
  saveToLocalStorage(projects);
  renderTodos(projects[projectIndex].todos);
};

const selectProject = (index) => {
  selectedProjectIndex = index;
  renderTodos(projects[index].todos);

  const addTodoButton = document.getElementById("add-todo-btn-view-todos");
  addTodoButton.style.display = "block";
  hideAddTodoForm();
};

const setupEventListeners = () => {
  document.getElementById("add-project-btn").addEventListener("click", () => {
    const projectName = prompt("Proje ismini Giriniz:");
    if (projectName) {
      addProject(projectName);
    }
  });

  document
    .getElementById("add-todo-btn-view-todos")
    .addEventListener("click", () => {
      document.getElementById("add-todo-form").style.display = "block";
      document.getElementById("close-todo-btn").style.display = "block";
      document.getElementById("add-todo-btn-view-todos").style.display = "none";
    });

  document.getElementById("add-todo-btn").addEventListener("click", () => {
    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("todo-description").value;
    const dueDate = document.getElementById("todo-dueDate").value;
    const priority = document.getElementById("todo-priority").value;

    if (title && description && dueDate && priority) {
      const newTodo = new Todo(title, description, dueDate, priority);
      addTodo(selectedProjectIndex, newTodo);
    }
  });
};
document.getElementById("close-todo-btn").addEventListener("click", () => {
  document.getElementById("add-todo-form").style.display = "none";
});

const init = () => {
  projects = loadFromLocalStorage();
  if (projects.length === 0) {
    addProject("Default Project");
  }
  renderProjects(projects);
  setupEventListeners();
};

const hideAddTodoForm = () => {
  document.getElementById("add-todo-form").style.display = "none";
};

window.deleteProject = deleteProject;
window.selectProject = selectProject;
window.deleteTodoFromUI = deleteTodoFromUI;

export { addProject, addTodo, renderProjects, renderTodos, init };
