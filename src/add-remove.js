import iconDelete from './delete.png';
import iconDots from './icon_dots.png';
import updateCheckbox from './update-chk.js';
import './style.css';

const addList = document.body.querySelector('.add-list');
const inputList = document.body.querySelector('.input-list');
const uList = document.body.querySelector('.ulist-child');

const todoArray = [];

export const removeTask = (list) => {
  const index = Number(list.id);
  list.remove();
  todoArray.splice(index, 1);
  todoArray.forEach((element, index) => {
    element.index = index;
  });
  localStorage.setItem('data', JSON.stringify(todoArray));
};

export const editTask = (event, list, checkboxImage, checkboxLabel) => {
  const index = Number(list.id);

  if (event === 'label') {
    checkboxImage.src = iconDelete;
    checkboxImage.id = 'delete';
    checkboxLabel.readOnly = false;
    checkboxLabel.id = 'labelClick';
    list.style.backgroundColor = 'yellow';
    checkboxLabel.style.backgroundColor = 'yellow';
  } else if (event === 'delete') {
    removeTask(list);
  } else if (event === 'labelClick') {
    checkboxImage.src = iconDots;
    checkboxImage.id = 'dots';
    list.style.backgroundColor = 'white';
    checkboxLabel.style.backgroundColor = 'white';
    checkboxLabel.id = 'label';
    checkboxLabel.readOnly = true;
    todoArray[index].description = checkboxLabel.value;
    localStorage.setItem('data', JSON.stringify(todoArray));
  } else {
    checkboxImage.src = iconDots;
    checkboxImage.id = 'dots';
    list.style.backgroundColor = 'white';
    checkboxLabel.style.backgroundColor = 'white';
    checkboxLabel.id = 'label';
    checkboxLabel.readOnly = true;
    todoArray[index].description = checkboxLabel.value;
    localStorage.setItem('data', JSON.stringify(todoArray));
  }
};

export const addTask = (description, index, check) => {
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
  checkboxImage.src = iconDots;
  checkboxImage.id = 'dots';
  list.appendChild(checkbox);
  list.appendChild(checkboxLabel);
  list.appendChild(checkboxImage);
  list.addEventListener('click', (event) => {
    editTask(event.target.id, list, checkboxImage, checkboxLabel);
  });
  console.log(list);
  return list;
};

export const createList = () => {
  uList.innerHTML = '';
  todoArray.forEach((element, index) => {
    element.index = index;
    const list = addTask(element.description, index, element.completed);
    uList.appendChild(list);
  });
  localStorage.setItem('data', JSON.stringify(todoArray));
};

addList.addEventListener('click', () => {
  if (inputList.value !== '') {
    const des = inputList.value;
    todoArray.push(
      { description: des, completed: false, index: 0 },
    );
  }
  inputList.value = '';
  createList();
});

export default todoArray;