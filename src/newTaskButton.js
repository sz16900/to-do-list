const renderButton = () => {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-secondary');
  button.setAttribute('type', 'button');
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#exampleModalCenter');
  button.textContent = 'New Task';
  //   button.addEventListener('click', createTask);
  container.appendChild(button);
};

export default renderButton;
