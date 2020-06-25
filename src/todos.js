const Todo = (nam) => {
  const name = nam;
  const tasks = [];

  const setTask = (task) => {
    tasks.push(task);
  };

  return { name, tasks, setTask };
};

export default Todo;
