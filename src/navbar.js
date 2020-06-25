const renderNavbar = () => {
  const container = document.getElementById('main-container');
  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-dark', 'bg-dark');
  const button = document.createElement('button');
  button.classList.add('navbar-toggler');
  const span = document.createElement('span');
  span.classList.add('navbar-toggler-icon');
  button.appendChild(span);
  nav.appendChild(button);
  container.appendChild(nav);

  return null;
};
export default renderNavbar;
