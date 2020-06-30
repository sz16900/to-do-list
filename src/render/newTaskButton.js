const renderButton = () => {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-success', 'new-task-btn');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'new-task');
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#exampleModalCenter');
  button.textContent = 'New Task';
  container.appendChild(button);
};

export default renderButton;
