import Task from '../objects/task';

const setInfo = (task) => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  //   add it to the all tasks project therefore [0]
  projects[0].tasks.push(task);
  if (task.project !== 'All Tasks') {
    projects.find((o) => o.name === task.project).tasks.push(task);
  }
  localStorage.setItem('projects', JSON.stringify(projects));
  window.location.reload();
};

export const updateInfo = (thisId, task) => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;
  const dueDate = document.getElementById('dueDate').value;
  const project = document.getElementById('project').value;
  const id = task.id;
  const newlyCreatedTask = Task(
    title,
    description,
    priority,
    dueDate,
    project,
    id
  );

  const localStorageCopy = JSON.parse(localStorage.getItem('projects'));

  const indexOfTaskInAllTasks = localStorageCopy[0].tasks.findIndex(
    (task) => task.id === thisId
  );
  localStorageCopy[0].tasks[indexOfTaskInAllTasks] = newlyCreatedTask;

  // set updated task into old array index

  const indexOfProjectInTodos = localStorageCopy.findIndex(
    (o) => o.name === task.project
  );

  const indexOfTaskInSpecificProject = localStorageCopy[
    indexOfProjectInTodos
  ].tasks.findIndex((task) => task.id === thisId);

  localStorageCopy[indexOfProjectInTodos].tasks[
    indexOfTaskInSpecificProject
  ] = newlyCreatedTask;

  localStorage.setItem('projects', JSON.stringify(localStorageCopy));
  window.location.reload();
};

export const grabInfo = () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;
  const dueDate = document.getElementById('dueDate').value;
  const project = document.getElementById('project').value;
  const id = `task-${Date.now()}`;
  const task = Task(title, description, priority, dueDate, project, id);
  setInfo(task);
};
