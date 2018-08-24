function addTask() {

    const value = document.getElementById('interfaceInput').value;

    if(!value) return;

    let task = new Task (value);
    task.add();

    taskStorage.pushStorage(task);

    if ( taskStorage.filter === 'complete' ) {
        task.liText.classList.toggle('task__complete');
        task.checked = !(task.checked);
    }

    document.getElementById('interfaceInput').value = '';

}

// const buttonAdd = document.getElementById('interfaceButtonAdd');
// buttonAdd.addEventListener("click", addTask);
