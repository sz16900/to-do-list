import 'bootstrap';
import './scss/app.scss';
import './css/main.css';

// import Task from './task';
// import Todo from './todos';
import renderNavbar from './navbar';
import renderButton from './newTaskButton';
import renderModal from './modal';

// const task1 = Task('adasd', 'sdddsaw', 'poop', 1234);
// const td = Todo('cool');
// td.setTask(task1);
// console.log(td.name);
// console.log(td.tasks);

renderModal();
renderNavbar();
renderButton();
