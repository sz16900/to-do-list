import 'bootstrap';
import './scss/app.scss';
import './css/main.css';

// import Task from './task';
import renderNavbar from './render/navbar';
import renderButton from './render/newTaskButton';
import renderModal from './render/modal';
import initializeLocalStorage from './handlers/initLocalStorage';
import renderTasks from './render/renderTasks';
import renderTitle from './render/renderTitle';

initializeLocalStorage();
renderModal();
renderNavbar();
renderTitle('All Tasks');
renderButton();
renderTasks(0);
