import todoArray from "./__tests__/todoarray";
import updateCheckbox from "./update-chk.js";
// jest.mock('./__tests__/todoarray.js')

 const addTask = (description, index, check) => {
    const list = document.createElement('li');
    const checkbox = document.createElement('input');
    const checkboxImage = document.createElement('img');
    list.className = 'chklist';
    list.id = index;
    if (check) {
      list.classList.add('active');
      checkbox.checked = true;
    }
    checkbox.name = 'todo';
    checkbox.className = 'checkboxCls';
    checkbox.id = index;
    checkbox.value = description;
    checkbox.type = 'checkbox';
  
    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        updateCheckbox(list, todoArray, true);
      }
  
      if (!(event.target.checked)) {
        updateCheckbox(list, todoArray, false);
      }
    });
    const checkboxLabel = document.createElement('input');
    checkboxLabel.type = 'text';
    checkboxLabel.id = 'label';
    checkboxLabel.value = description;
    checkboxLabel.readOnly = true;
    // checkboxImage.src = iconDots;
    checkboxImage.id = 'dots';
    list.appendChild(checkbox);
    list.appendChild(checkboxLabel);
    list.appendChild(checkboxImage);
    list.addEventListener('click', (event) => {
      editTask(event.target.id, list, checkboxImage, checkboxLabel);
    });
    console.log(list);
    return 1;
  };

  module.exports=addTask;