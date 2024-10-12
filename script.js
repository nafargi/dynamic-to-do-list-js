document.addEventListener('DOMContentLoaded',function(){
    loadTasks();
    
    const addButton = document.getElementById('add-task-btn');
    const  taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    function addTask( save = true){
        let taskText = taskInput.value.trim();
        if(taskText === ''){
            alert('Please enter a task to add to the list of taks ');
        }else{
            let newTask = document.createElement('li');
            newTask.textContent = taskText;

            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
        
            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);
            taskInput.value = '';   
            
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
    
        }
       
      
    }
    


    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress',(event) => {
         if(event.key === 'Enter'){
             addTask();
         }
    });

 taskList.addEventListener('click',(event) => {
     if(event.target.classList.contains('remove-btn')){
         event.target.parentElement.remove();
     }
 });
});

