import addProject from './addProjectHandler';
import renderTasks from './renderTasks';
import renderTitle from './renderTitle';

const renderNavbar = () => {
  const arrayOfProjects = JSON.parse(localStorage.projects);

  const container = document.getElementById('main-container');
  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-dark', 'bg-dark');

  // Inline form
  const form = document.createElement('form');
  form.classList.add('form-inline');
  const formGroup = document.createElement('div');
  formGroup.classList.add('form-group', 'mx-sm-3', 'mb-2');
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('class', 'form-control');
  input.setAttribute('id', 'addProject');
  input.setAttribute('placeholder', 'Add New Project');
  const newProjectBtn = document.createElement('button');
  newProjectBtn.setAttribute('type', 'submit');
  newProjectBtn.classList.add('btn', 'btn-primary', 'mb-2');
  newProjectBtn.textContent = '+';
  newProjectBtn.addEventListener('click', addProject);

  formGroup.appendChild(input);
  form.appendChild(formGroup);
  form.appendChild(newProjectBtn);

  // DropDown Stuff
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');
  const button = document.createElement('button');

  button.setAttribute('type', 'button');
  button.setAttribute('id', 'dropdownMenuButton');
  button.setAttribute('data-toggle', 'dropdown');
  button.setAttribute('aria-haspopup', 'true');
  button.setAttribute('aria-expanded', 'false');
  button.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
  button.textContent = 'List of Projects';
  const dpMenu = document.createElement('div');
  dpMenu.classList.add('dropdown-menu');
  dpMenu.setAttribute('aria-labelledby', 'dropdownMenuButton');

  for (let index = 0; index < arrayOfProjects.length; index += 1) {
    const a = document.createElement('button');
    a.textContent = arrayOfProjects[index].name;
    a.classList.add('dropdown-item');
    a.addEventListener('click', () => {
      document.getElementById('project-title').remove();
      document.getElementById('card-column-id').remove();
      renderTitle(arrayOfProjects[index].name);
      renderTasks(index);
    });
    dpMenu.appendChild(a);
  }

  // Title or logo
  const h1 = document.createElement('h1');
  h1.classList.add('navbar-title');
  h1.textContent = 'To-Do';

  // Add it to the chain
  dropdown.appendChild(button);
  dropdown.appendChild(dpMenu);
  nav.appendChild(form);
  nav.appendChild(dropdown);
  nav.appendChild(h1);
  container.appendChild(nav);

  return null;
};
export default renderNavbar;
