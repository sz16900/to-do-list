import Todo from './todos';

const initializeLocalStorage = () => {
  if (localStorage.getItem('projects') === null) {
    const projects = [];
    const allTasks = Todo('All Tasks');
    projects.push(allTasks);
    localStorage.setItem('projects', JSON.stringify(projects));
  }
};

export default initializeLocalStorage;
