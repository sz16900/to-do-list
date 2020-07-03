const Task = (titl, desc, prio, dat, projct = 'All Tasks', receivedId) => {
  const title = titl;
  const description = desc;
  const priority = prio;
  const dueDate = dat;
  const project = projct;
  const id = receivedId;

  return {
    title,
    description,
    priority,
    dueDate,
    project,
    id,
  };
};

export default Task;
