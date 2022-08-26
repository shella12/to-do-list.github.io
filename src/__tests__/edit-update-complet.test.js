/**
 * @jest-environment jsdom
 */
const todoArray = require('../__mocks__/todoarray');

import { TestWatcher } from 'jest';
import addTask from '../addTask.js';
import editTask from '../editTask';


describe('Edit The target Item', () => {
  document.body.innerHTML = '<div>'
    + '  <ul class="list"></li>'
    + '</div>';
  const list = document.querySelector('ul.list');
  const inputFeild = document.createElement('input');
  todoArray.forEach((element) => {
   const listItem = addTask(element.description, element.index, false);
    list.appendChild(listItem);
  });

  test('Edit the first Item', () => {
    inputFeild.value = 'Play Volley ball';
    editTask('lable', list.firstElementChild, inputFeild);
    expect(todoArray[0].description).toMatch(inputFeild.value);
  });

  test('Edit the Second Item', () => {
    inputFeild.value = 'Walk for 20 min';
    editTask('lable', list.children[1], inputFeild);
    expect(todoArray[1].description).toMatch(inputFeild.value);
  });

  test('Edit the Third Item', () => {
    inputFeild.value = 'Read Book';
    editTask('lable', list.children[2], inputFeild);
    expect(todoArray[2].description).toMatch(inputFeild.value);
  });
  
});
