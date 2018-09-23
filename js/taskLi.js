const TaskLi = (function () {
  const TaskLi = function(task) {
    this.task = task;
    this.taskDomObject = createElem('li', 'container__task_list-item');
    this.buttonComplete = createElem('button', 'button__complete', 'Complete');
    this.buttonDelete = createElem('button', 'button__delete', 'Delete');

    const liText = createElem('div', 'container__task_list-item-text', task.value);

    this.taskDomObject.appendChild(this.buttonComplete);
    this.taskDomObject.appendChild(liText);
    this.taskDomObject.appendChild(this.buttonDelete);
    isActive(task.checked, this);
  };

  function createElem(newElem, elemClass, elemText) {
    const elem = document.createElement(newElem);
    elem.classList.add(elemClass);
    if (elemText) {
        const text = document.createTextNode(elemText);
        elem.appendChild(text);
    };
    return elem;
  };

  function isActive(status, self) {
    if (status) {
      self.taskDomObject.classList.add('task__complete');
    };
  };

  TaskLi.prototype = {
    setButtonEvent: function(button, eventName, func, self) {
      button.addEventListener(eventName, function(){
        return func(self);
      });
    },
  };

  return TaskLi;
})();