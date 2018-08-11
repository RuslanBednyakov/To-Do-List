function completeTask (id) {

  taskStorage.findObj(id);

  taskStorage.currentObj.liText.classList.toggle('task__complete');
  taskStorage.currentObj.checked = !(taskStorage.currentObj.checked);

}

function completeAllTask() {

  taskStorage.storage.forEach(function(item, i) {

    item.checked = taskStorage.completeAll;
    item.liText.classList.remove('task__complete');

    if (item.checked) {
      item.liText.classList.add('task__complete');
    }

  });

  taskStorage.completeAll = !taskStorage.completeAll;

}