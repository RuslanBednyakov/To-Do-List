function deleteTask(id) {

  taskStorage.findObj(id);

  document.querySelector('.container__task_list').removeChild(taskStorage.currentObj.taskDomOdj);
  taskStorage.storage.splice(taskStorage.map[id], 1);
  taskStorage.refreshMap();
}