function completeTask (id) {

  taskStorage.findObj(id);

  taskStorage.currentObj.liText.classList.toggle('complete');
  taskStorage.currentObj.checked = !(taskStorage.currentObj.checked);

}