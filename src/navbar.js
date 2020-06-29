const renderNavbar = () => {
  const arrayOfProjects = JSON.parse(localStorage.projects);

  const container = document.getElementById('main-container');
  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-dark', 'bg-dark');
  const h1 = document.createElement('h1');
  h1.classList.add('navbar-title');
  h1.textContent = 'To-Do';

  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');
  const button = document.createElement('button');

  button.setAttribute('type', 'button');
  button.setAttribute('id', 'dropdownMenuButton');
  button.setAttribute('data-toggle', 'dropdown');
  button.setAttribute('aria-haspopup', 'true');
  button.setAttribute('aria-expanded', 'false');
  button.classList.add('navbar-toggler');
  const span = document.createElement('span');
  span.classList.add('navbar-toggler-icon');
  const dpMenu = document.createElement('div');
  dpMenu.classList.add('dropdown-menu');
  dpMenu.setAttribute('aria-labelledby', 'dropdownMenuButton');

  for (let index = 0; index < arrayOfProjects.length; index += 1) {
    const a = document.createElement('a');
    a.textContent = arrayOfProjects[index].name;
    a.classList.add('dropdown-item');
    dpMenu.appendChild(a);
  }

  button.appendChild(span);
  dropdown.appendChild(button);
  dropdown.appendChild(dpMenu);
  nav.appendChild(dropdown);

  nav.appendChild(h1);
  container.appendChild(nav);

  return null;
};
export default renderNavbar;
