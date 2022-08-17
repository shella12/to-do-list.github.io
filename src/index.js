import './style.css';
import iconDots from './icon_dots.png';

const todoArray = [
  {
    description: 'Clean the car',
    completed: false,
    index: 0,
  },
  {
    description: 'Go for grocery shopping',
    completed: false,
    index: 1,
  },
];

const uList = document.body.querySelector('.ulist');

function component(description, index) {
  const list = document.createElement('li');
  const checkbox = document.createElement('input');
  const checkboxImage = document.createElement('img');
  list.className = 'chklist';
  checkbox.name = 'todo';
  checkbox.id = index;
  checkbox.value = description;
  checkbox.type = 'checkbox';
  const checkboxLabel = document.createElement('label');
  checkboxLabel.htmlFor = checkbox.id;
  checkboxLabel.innerText = description;
  checkboxImage.src = iconDots;
  list.appendChild(checkbox);
  list.appendChild(checkboxLabel);
  list.appendChild(checkboxImage);
  return list;
}

todoArray.forEach((element) => {
  const list = component(element.description, element.index);
  uList.appendChild(list);
});
