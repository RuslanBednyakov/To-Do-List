const Filter =(function() {
  // let value = 'false';
  const Filter = function () {
    this.value = 'all';
    this.buttonFilterAll = document.getElementById('taskButtonFilterAll');
    this.buttonFilterComplete = document.getElementById('taskButtonFilterComplete');
    this.buttonFilterActive = document.getElementById('taskButtonFilterActive');
  };

  Filter.prototype = {
    setButtonEvent: function(button, eventName, func, value) {
      button.addEventListener(eventName, function(){
        return func(value);
      });
    },

    getFilterName: function () {
      return this.value;
    },
  }
  return Filter;
})()