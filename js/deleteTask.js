function deleteTask(id) {

  taskStorage.findObj(id);

  document.querySelector('.container__task_list').removeChild(taskStorage.currentObj.taskDomOdj);
  taskStorage.storage.splice(taskStorage.map[id], 1);
  taskStorage.refreshMap();
}

function deleteAllTask() {

  const currentContainer = document.querySelector('.container__task_list');
  const emptyContainer = currentContainer.cloneNode(false);

  document.querySelector('.container__task').replaceChild(emptyContainer, currentContainer)

  taskStorage.storage = [];
  taskStorage.refreshMap();

}