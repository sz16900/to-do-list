import grabInfo from './infoHandler';

const renderModal = () => {
  const container = document.getElementById('main-container');

  //   container
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal', 'fade');
  modalContainer.setAttribute('id', 'exampleModalCenter');
  modalContainer.setAttribute('tabindex', '-1');
  modalContainer.setAttribute('role', 'dialog');
  modalContainer.setAttribute('aria-labelledby', 'exampleModalCenterTitle');
  modalContainer.setAttribute('aria-hidden', 'true');

  const modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
  modalDialog.setAttribute('role', 'document');

  const modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');

  // form stuff
  const form = document.createElement('form');
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Add';
  button.setAttribute('type', 'button');
  button.addEventListener('click', grabInfo);
  for (let index = 0; index < 4; index += 1) {
    const formGroup = document.createElement('div');
    const label = document.createElement('label');
    let input = document.createElement('input');
    const opt1 = document.createElement('option');
    const opt2 = document.createElement('option');
    const opt3 = document.createElement('option');

    switch (index) {
      case 0:
        label.textContent = 'Title';
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'title');
        break;
      case 1:
        label.textContent = 'Description';
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'description');
        break;
      case 2:
        label.textContent = 'Priority';
        input = document.createElement('select');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', 'priority');
        opt1.textContent = 'minimum';
        opt2.textContent = 'intermediate';
        opt3.textContent = 'maximum';
        input.appendChild(opt1);
        input.appendChild(opt2);
        input.appendChild(opt3);

        break;
      case 3:
        label.textContent = 'Due Date';
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', 'date');
        input.setAttribute('id', 'dueDate');
        break;
      default:
        return null;
    }
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form.appendChild(formGroup);
  }
  form.appendChild(button);

  // add thing
  modalContent.appendChild(form);
  modalDialog.appendChild(modalContent);
  modalContainer.appendChild(modalDialog);
  container.appendChild(modalContainer);

  return null;
};

export default renderModal;
