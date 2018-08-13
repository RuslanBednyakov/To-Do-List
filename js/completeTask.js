function completeTask (id) {

  taskStorage.findObj(id);

  taskStorage.currentObj.liText.classList.toggle('task__complete');
  taskStorage.currentObj.checked = !(taskStorage.currentObj.checked);

  if ( !(taskStorage.filter == 'all') ) {
    document.querySelector('.container__task_list').removeChild(taskStorage.currentObj.taskDomOdj);
    taskStorage.filteredStorage.splice(taskStorage.map[id], 1);
    taskStorage.refreshMap();
  }

}

function completeAllTask() {

  if ( taskStorage.filter == 'active' ) {

    taskStorage.completeAll = true;

    taskStorage.filteredStorage.forEach(function(item) {
      item.checked = taskStorage.completeAll;
      item.liText.classList.add('task__complete');
    });

    taskStorage.filteredStorage = [];
    taskStorage.map = {};

    const currentContainer = document.querySelector('.container__task_list');
    const emptyContainer = currentContainer.cloneNode(false);

    document.querySelector('.container__task').replaceChild(emptyContainer, currentContainer);

    return;
  }

  taskStorage.storage.forEach(function(item) {

    item.checked = taskStorage.completeAll;
    item.liText.classList.remove('task__complete');

    if (item.checked) {
      item.liText.classList.add('task__complete');
    }

  });

  taskStorage.completeAll = !taskStorage.completeAll;

}
