const Task = (titl, desc, prio, dat, projct = 'All Tasks') => {
  const title = titl;
  const description = desc;
  const priority = prio;
  const dueDate = dat;
  const project = projct;

  return {
    title,
    description,
    priority,
    dueDate,
    project,
  };
};

export default Task;
