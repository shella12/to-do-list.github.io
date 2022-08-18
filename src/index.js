import todoArray, { createList } from './add-remove.js';
import './style.css';

if (localStorage.getItem('data') !== null) {
  const fetchDataList = JSON.parse(localStorage.getItem('data'));
  fetchDataList.forEach((element) => {
    todoArray.push(element);
  });

  createList();
}