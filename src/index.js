import todoArray, { createList } from './add-remove.js';
import { clearAllCompleted as clearCompleted } from './update-chk.js';
import './style.css';

const clearBtn = document.body.querySelector('.clearbtn');

if (localStorage.getItem('data') !== null) {
  const fetchDataList = JSON.parse(localStorage.getItem('data'));
  fetchDataList.forEach((element) => {
    todoArray.push(element);
  });

  createList();
}

clearBtn.addEventListener('click', () => {
  const fetchDataList = clearCompleted(todoArray);
  todoArray.length = 0;
  fetchDataList.forEach((element) => {
    todoArray.push(element);
  });
  createList();
});
