function deleteTask(id) {

  taskStorage.findObj(id);

  document.querySelector('.container__task_list').removeChild(taskStorage.currentObj.taskDomOdj);
  taskStorage.storage.splice(taskStorage.map[id], 1);

  if ( !(taskStorage.filter === 'all') ) {
    taskStorage.filteredStorage.splice(taskStorage.mapFiltered[id], 1);
      taskStorage.refreshMap(true);
  }

  taskStorage.refreshMap();
}

function deleteAllTask() {

  const currentContainer = document.querySelector('.container__task_list');
  const emptyContainer = currentContainer.cloneNode(false);

  document.querySelector('.container__task').replaceChild(emptyContainer, currentContainer);

  // taskStorage.map = {};

  if ( taskStorage.filter === 'all' ) {
    // taskStorage.filteredStorage.forEach(function(item) {
    //   item.checked = taskStorage.completeAll;
    //   item.liText.classList.add('task__complete');
    // });
      taskStorage.map = {};
      taskStorage.storage = [];
      taskStorage.mapFiltered = {};
      taskStorage.filteredStorage = [];
    return;
  }

  // taskStorage.storage = [];

    let newStorage = taskStorage.storage.filter(function(task) {
        return task.checked !== taskStorage.completeAll;
    });

    taskStorage.storage = newStorage;

    taskStorage.mapFiltered = {};
    taskStorage.filteredStorage = [];

}
