function TaskStorage () {

  this.storage = [];
  this.map = {};
  this.filter = 'all';
  this.completeAll = true;
  this.filteredStorage = [];

};

TaskStorage.prototype.pushStorage = function (newTask) {

  const key = newTask.id
  this.storage.push(newTask);

  if ( !(this.filter == 'all') ) {
  this.filteredStorage.push(newTask);
  this.map[key] = this.filteredStorage.length - 1;
  return;
  };
  
  this.map[key] = this.storage.length - 1;

};

TaskStorage.prototype.findObj =  function (id) {

  const storageObjNumber = taskStorage.map[id];
  let currentObj;

  if (this.filter == 'all') {
    currentObj = taskStorage.storage[storageObjNumber];
  } else {
    currentObj = taskStorage.filteredStorage[storageObjNumber];
  }
  return this.currentObj = currentObj;

};

TaskStorage.prototype.refreshMap = function (){
  
  this.map = {};

  if ( !(this.filter == 'all') ) {
    this.filteredStorage.forEach(function(item, i) {
      taskStorage.map[item.id] = i;
    });
    return;
  }

  this.storage.forEach(function(item, i) {
    taskStorage.map[item.id] = i;
  });

};

let taskStorage = new TaskStorage;

function Task (value) {

  this.checked = false;
  this.value = value;
  this.id = new Date();

};

Task.prototype = Object.create(TaskStorage.prototype);

Task.prototype.constructor = Task;

Task.prototype.createElem = function(newElem, elemClass, elemText) {

  const elem = document.createElement(newElem);
  elem.classList.add(elemClass);

  if (elemText) {
      const text = document.createTextNode(elemText);
      elem.appendChild(text);
  };

  return elem;

};

Task.prototype.add = function() {

  const li = this.createElem('li', 'container__task_list-item');
  const buttonComplete = this.createElem('button', 'button__complete', 'Complete');
  buttonComplete.dataset.id = this.id;
  buttonComplete.dataset.name = 'button-complete';
  const liText = this.createElem('div', 'container__task_list-item-text', this.value);
  const buttonDelete = this.createElem('button', 'button__delete', 'Delete');
  buttonDelete.dataset.id = this.id;
  buttonDelete.dataset.name = 'button-delete';


  li.appendChild(buttonComplete);
  li.appendChild(liText);
  li.appendChild(buttonDelete);
  this.taskDomOdj = li;
  this.liText = liText;

  document.querySelector('.container__task_list').insertBefore(li, document.querySelector('.container__task_list').firstChild);

};
