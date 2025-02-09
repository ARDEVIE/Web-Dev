document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const goalInput = document.getElementById('Input');
    const tasksContainer = document.getElementById('goals');

    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTask(goalInput.value);
      goalInput.value = '';
    });

    function addTask(taskText) {
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('todo-item');

      const checkbox = document.createElement('input');
      checkbox.classList.add('checkbox-btn');

      checkbox.type = 'checkbox';

      const taskTextElement = document.createElement('span');
      taskTextElement.innerText = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      const deleteImage = document.createElement('img');
      deleteImage.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhI-BtMZuqOTjUQob70k5GO4UI5qquLDgFZNS6GnZ1xnHRXfq582huTqdeVJuAws-i0c&usqp=CAU';
      
      deleteBtn.appendChild(deleteImage);
      deleteBtn.addEventListener('click', function() {
        tasksContainer.removeChild(taskDiv);
      });

      checkbox.addEventListener('change',function(){
        if (checkbox.checked) {
            taskTextElement.classList.add('completed');
          } else {
            taskTextElement.classList.remove('completed');
          }
      });

      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(taskTextElement);
      taskDiv.appendChild(deleteBtn);
      tasksContainer.appendChild(taskDiv);
    }
  });