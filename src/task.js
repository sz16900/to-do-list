const Task = (titl, desc, prio, dat) => {
  const title = titl;
  const description = desc;
  const priority = prio;
  const dueDate = dat;

  return {
    title,
    description,
    priority,
    dueDate,
  };
};

export default Task;
