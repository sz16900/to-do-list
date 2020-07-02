import { updateInfo, grabInfo } from './infoHandler';

export const removeBtn = (index) => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  //   this can be dynamically found by the name of the projects itself
  projects[0].tasks.splice(index, 1);
  localStorage.setItem('projects', JSON.stringify(projects));
  window.location.reload();
};

export const updateBtn = (thisId) => {
  const task = JSON.parse(localStorage.getItem('projects'))[0].tasks.find(
    (o) => o.id === thisId
  );

  document.getElementById('title').value = task.title;
  document.getElementById('description').value = task.description;
  document.getElementById('priority').value = task.priority;
  document.getElementById('dueDate').value = task.dueDate;
  document.getElementById('project').value = task.project;
  document.getElementById('add-update-btn').value = 'UPDATE';
  document.getElementById('add-update-btn').textContent = 'UPDATE';

  document
    .getElementById('add-update-btn')
    .removeEventListener('click', grabInfo);

  document.getElementById('add-update-btn').addEventListener('click', () => {
    updateInfo(thisId, task);
  });
};
