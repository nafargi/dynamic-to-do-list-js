document.addEventListener('DOMContentLoaded',function(){
    const addButton = document.getElementById('add-task-btn');
    const  taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        let taskText = taskInput.value.trim();
        if(taskText === ''){
            alert('Please enter a task to add to the list of taks ');
        }else{
            let newTask = document.createElement('li');
            newTask.textContent = taskText;

            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.setAttribute('class','remove-btn');
            removeButton.onclick = function removeTask(){
                taskList.removeChild(newTask);
             }

            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);
        }
    }

    

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress',(e) => {
         if(e.key === 'Enter'){
             addTask();
         }
    });
});
