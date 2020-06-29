import Todo from './todos';

const addProject = () => {
  const arrayOfProjects = JSON.parse(localStorage.projects);
  const id = document.getElementById('addProject').value;
  const allTasks = Todo(id);
  arrayOfProjects.push(allTasks);
  localStorage.setItem('projects', JSON.stringify(arrayOfProjects));
  window.location.reload();
};
export default addProject;
