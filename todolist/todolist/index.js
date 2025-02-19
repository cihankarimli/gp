const addButton = document.querySelector('.add');
const input = document.querySelector('input');
  const todoList = document.querySelector('.text-line');




  addButton.addEventListener('click', function () {
      const deleteTaskButton = document.createElement('button');
      deleteTaskButton.textContent = 'Delete';
      const taskText = input.value.trim();
      if (taskText !== '') {
          const listItem = document.createElement('li');
          listItem.textContent = taskText;
          
          let secondAddButton=document.createElement('button')
          secondAddButton.textContent='Save'
          
                     listItem.addEventListener('click',function () {
                         let listInput=document.createElement('input')
                         listInput.type='text'
                         listItem.replaceWith(listInput)
                         todoList.appendChild(secondAddButton)
                         let newDiv=document.createElement('div')
                         todoList.appendChild(newDiv)
                         newDiv.appendChild(secondAddButton)
                         newDiv.appendChild(listInput)
                       
                       secondAddButton.addEventListener('click',function () {
                          listItem.textContent=listInput.value
                          listInput.replaceWith(listItem)
                          secondAddButton.replaceWith(deleteTaskButton)
                          listItem.appendChild(deleteTaskButton)
                          
                       })
                       
                        
                        
                         
                     })
          
          
          
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