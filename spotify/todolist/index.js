   const addButton = document.querySelector('.add');
  const input = document.querySelector('input');
    const todoList = document.querySelector('.text-line');




    addButton.addEventListener('click', function () {
        const taskText = input.value;
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            
            
 

            const deleteTaskButton = document.createElement('button');
            deleteTaskButton.textContent = 'Delete';
            deleteTaskButton.addEventListener('click', function () {
                todoList.removeChild(listItem);
            });

            listItem.appendChild(deleteTaskButton);
            todoList.appendChild(listItem);
            input.value = ''; 
        }
        else{
            alert('Melumati daxil edin')
        }
        
       
       
       
    });


