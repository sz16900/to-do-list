import 'bootstrap';
import './scss/app.scss';
import './css/main.css';

// import Task from './task';
import renderNavbar from './navbar';
import renderButton from './newTaskButton';
import renderModal from './modal';
import initializeLocalStorage from './initLocalStorage';
import renderTasks from './renderTasks';
import renderTitle from './renderTitle';

initializeLocalStorage();
renderModal();
renderNavbar();
renderTitle('All Tasks');
renderButton();
renderTasks(0);
