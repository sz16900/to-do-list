const renderNavbar = () => {
  const container = document.getElementById('main-container');
  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-dark', 'bg-dark');
  const h1 = document.createElement('h1');
  h1.classList.add('navbar-title');
  h1.textContent = 'To-Do';
  const button = document.createElement('button');
  button.classList.add('navbar-toggler');
  const span = document.createElement('span');
  span.classList.add('navbar-toggler-icon');
  button.appendChild(span);
  nav.appendChild(button);
  nav.appendChild(h1);
  container.appendChild(nav);

  return null;
};
export default renderNavbar;
