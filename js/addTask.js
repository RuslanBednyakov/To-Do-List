function addTask() {

    const value = document.getElementById('interfaceInput').value;

    if(!value) return;

    let task = new Task (value);
    task.add();

    document.getElementById('interfaceInput').value = '';

    taskStorage.pushStorage(task);
    
}

// const buttonAdd = document.getElementById('interfaceButtonAdd');
// buttonAdd.addEventListener("click", addTask);