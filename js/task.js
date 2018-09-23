const Task = (function () {
  const Task = function () {
    this.id =+ new Date();
    this.value;
    this.checked;
  };

  Task.prototype = {
    setValue: function (value) {
      return this.value = value;
    },

    setCheckedStatus: function (status) {
      return this.checked = status;
    },
  };

  return Task;
})();