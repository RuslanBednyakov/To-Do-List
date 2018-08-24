function filterTasks(filterName) {

  function filterArr(filter) {

    const currentContainer = document.querySelector('.container__task_list');
    const newContainer = currentContainer.cloneNode(false);

    if (filter === 'all') {
      taskStorage.storage.forEach(function(task) {
        newContainer.insertBefore(task.taskDomOdj, newContainer.firstChild);
      });
      taskStorage.refreshMap();
      document.querySelector('.container__task').replaceChild(newContainer, currentContainer);
      return;
    }

    let filteredStorage = taskStorage.storage.filter(function(task) {
      return task.checked === filter;
    });



    taskStorage.mapFiltered = {};
    taskStorage.filteredStorage = [];

    filteredStorage.forEach(function(task) {
      newContainer.insertBefore(task.taskDomOdj, newContainer.firstChild);
      taskStorage.filteredStorage.push(task);
      taskStorage.mapFiltered[task.id] = taskStorage.filteredStorage.length - 1;
    });

    document.querySelector('.container__task').replaceChild(newContainer, currentContainer);

      taskStorage.completeAll = filter;
  }

  switch (filterName) {

    case 'active':
    filterArr(false);
    taskStorage.filter = 'active';
    break;

    case 'complete':
    filterArr(true);
    taskStorage.filter = 'complete';
    break;

    case 'all':
    taskStorage.filter = 'all';
    filterArr('all');
    break;

  }
}
