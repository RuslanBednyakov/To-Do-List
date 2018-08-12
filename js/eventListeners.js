function events (event) {
  const target = event.target;
  const buttonName = target.getAttribute('data-name');
  const id = target.getAttribute('data-id');


  switch (buttonName) {

    case 'button-add': 
      addTask();
      break;

    case 'button-complete': 
      completeTask (id);
      break;

    case 'button-delete':
      deleteTask(id);
      break;

    case 'button-complete-all':
    completeAllTask();
    break;

    case 'button-delete-all':
    deleteAllTask();
    break;

    case 'button-filter-active':
    filterTasks('active');
    break;

    case 'button-filter-complete':
    filterTasks('complete');
    break;

    case 'button-filter-all':
    filterTasks('all');
    break;

    default: return;
  }

}

document.addEventListener("click", events);