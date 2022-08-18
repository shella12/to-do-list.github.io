import './style.css';
import createList, * as add from './add-remove.js';

if(localStorage.getItem('data')!==null){
  const fetchDataList = JSON.parse(localStorage.getItem('data'));
 fetchDataList.forEach(element => {
  add.todoArray.push(element);
 });
 
  add.createList();
}
