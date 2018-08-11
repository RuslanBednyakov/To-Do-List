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

    default: return;
  }

}

document.addEventListener("click", events);