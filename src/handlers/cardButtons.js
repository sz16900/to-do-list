import { updateInfo, grabInfo } from './infoHandler';

export const removeBtn = (thisId) => {
  const task = JSON.parse(localStorage.getItem('projects'))[0].tasks.find(
    (o) => o.id === thisId,
  );

  const localStorageCopy = JSON.parse(localStorage.getItem('projects'));

  const indexOfTaskInAllTasks = localStorageCopy[0].tasks.findIndex(
    (task) => task.id === thisId,
  );
  localStorageCopy[0].tasks.splice(indexOfTaskInAllTasks, 1);

  // set updated task into old array index

  const indexOfProjectInTodos = localStorageCopy.findIndex(
    (o) => o.name === task.project,
  );

  const indexOfTaskInSpecificProject = localStorageCopy[
    indexOfProjectInTodos
  ].tasks.findIndex((task) => task.id === thisId);

  localStorageCopy[indexOfProjectInTodos].tasks.splice(
    indexOfTaskInSpecificProject,
    1,
  );

  localStorage.setItem('projects', JSON.stringify(localStorageCopy));
  window.location.reload();
  // console.log(localStorageCopy);
};

export const updateBtn = (thisId) => {
  const task = JSON.parse(localStorage.getItem('projects'))[0].tasks.find(
    (o) => o.id === thisId,
  );

  // change the values of the button
  document.getElementById('add-update-btn').value = 'UPDATE';
  document.getElementById('add-update-btn').textContent = 'UPDATE';

  // remove the event listener
  document
    .getElementById('add-update-btn')
    .removeEventListener('click', grabInfo);

  // add event listener with different function
  document.getElementById('add-update-btn').addEventListener('click', () => {
    updateInfo(thisId, task);
  });
};
