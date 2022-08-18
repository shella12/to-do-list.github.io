import iconDots from './icon_dots.png';
import iconDelete from './delete.png';
import './style.css';

const addList = document.body.querySelector('.add-list');
const inputList = document.body.querySelector('.input-list');
const uList = document.body.querySelector('.ulist-child');
export const todoArray = [];

addList.addEventListener('click', () => {
  if (inputList.value !== '') {
    const des = inputList.value;
    todoArray.push(
      { description: des, completed: false, index: 0 },
    );
  }
  inputList.value = '';
  /* eslint-disable */
  createList();
});

export function addTask(description, index) {
  const list = document.createElement('li');
  const checkbox = document.createElement('input');
  const checkboxImage = document.createElement('img');
  list.className = 'chklist';
  list.id = index;
  checkbox.name = 'todo';
  checkbox.id = index;
  checkbox.value = description;
  checkbox.type = 'checkbox';
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
    /* eslint-disable */
    editTask(event.target.id, list, checkboxImage, checkboxLabel);
  });
  return list;
}

export function removeTask(list) {
  const index = Number(list.id);
  list.remove();
  todoArray.splice(index, 1);
  /* eslint-disable */
  createList();
}

export function editTask(event, list, checkboxImage, checkboxLabel) {
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
}

function createList() {
  uList.innerHTML = '';
  todoArray.forEach((element, index) => {
    element.index = index;
    const list = addTask(element.description, index);
    uList.appendChild(list);
  });
  localStorage.setItem('data', JSON.stringify(todoArray));
}

export default createList;