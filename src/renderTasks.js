import { removeBtn, changeBtn } from './cardButtons'

const renderTasks = () => {
  const allTasksArray = JSON.parse(localStorage.projects)[0].tasks;
  const container = document.getElementById('main-container');
  const cardColumns = document.createElement('div');
  cardColumns.classList.add('card-columns');

  for (let index = 0; index < allTasksArray.length; index += 1) {
    const card = document.createElement('div');
    switch (allTasksArray[index].priority) {
      case 'minimum':
        card.classList.add(
          'card',
          'text-white',
          'border-success',
          'card-background',
          'mb-3'
        );
        break;
      case 'intermediate':
        card.classList.add(
          'card',
          'text-white',
          'border-warning',
          'card-background',
          'mb-3'
        );
        break;
      case 'maximum':
        card.classList.add(
          'card',
          'text-white',
          'border-danger',
          'card-background',
          'mb-3'
        );
        break;
      default:
        card.classList.add(
          'card',
          'text-white',
          'border-success',
          'card-background',
          'mb-3'
        );
    }
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = allTasksArray[index].title;
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardDate = document.createElement('h6');
    cardDate.classList.add('card-title');
    cardDate.textContent = 'Due date: '.concat(allTasksArray[index].dueDate);
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = allTasksArray[index].description;
    const editBtn = document.createElement('button');
    editBtn.classList.add('btn', 'btn-secondary', 'm-2');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', changeBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'm-2');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', removeBtn);
    cardBody.appendChild(cardDate);
    cardBody.appendChild(cardText);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardBody);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);
    cardColumns.appendChild(card);

  }
  container.appendChild(cardColumns);
};
export default renderTasks;
