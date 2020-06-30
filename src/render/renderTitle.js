const renderTitle = (projectName) => {
  const container = document.getElementById('main-container');
  const title = document.createElement('h1');
  title.classList.add('display-2', 'text-center');
  title.setAttribute('id', 'project-title');
  title.textContent = projectName;
  container.appendChild(title);
};

export default renderTitle;
