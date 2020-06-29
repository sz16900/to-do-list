const removeBtn = (index) => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  //   this can be dynamically found by the name of the projects itself
  projects[0].tasks.splice(index, 1);
  localStorage.setItem('projects', JSON.stringify(projects));
  window.location.reload();
};

export default removeBtn;
