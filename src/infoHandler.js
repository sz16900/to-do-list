import Task from './task';

const setInfo = (task) => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  //   add it to the all tasks project therefore [0]
  projects[0].tasks.push(task);
  localStorage.setItem('projects', JSON.stringify(projects));
};

const grabInfo = () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;
  const dueDate = document.getElementById('dueDate').value;
  const task = Task(title, description, priority, dueDate);
  setInfo(task);
};

export default grabInfo;
