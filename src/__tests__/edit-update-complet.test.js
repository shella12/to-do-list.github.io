/**
 * @jest-environment jsdom
 */
import addTask from '../addTask.js';
import editTask from '../editTask';
import updateCheckbox from '../UpdateChkBox.js';
import clearAllCompleted from '../clearComplete.js';

let todoArray = require('../__mocks__/todoarray');

describe('Test case for editTask function', () => {
  document.body.innerHTML = '<div>'
  + ' <ul class="list"></li>'
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

describe('Test case for UpdateChkBox function', () => {
  document.body.innerHTML = '<div>'
   + ' <ul class="list"></li>'
    + '</div>';
  const list = document.querySelector('ul.list');
  todoArray.forEach((element) => {
    const listItem = addTask(element.description, element.index, false);
    list.appendChild(listItem);
  });

  test('Change completed status of first item', () => {
    updateCheckbox(list.children[0], todoArray, true);
    expect(todoArray[0].completed).toBeTruthy();
  });

  test('Change completed status of second item', () => {
    updateCheckbox(list.children[1], todoArray, false);
    expect(todoArray[1].completed).not.toBeTruthy();
  });
});

describe('Test case for clearComplete function', () => {
  test('Clear Completed first items from array', () => {
    todoArray[0].completed = true;
    todoArray = clearAllCompleted(todoArray);
    expect(todoArray).toHaveLength(3);
  });

  test('Clear Completed second items from array', () => {
    todoArray[1].completed = true;
    todoArray = clearAllCompleted(todoArray);
    expect(todoArray).toHaveLength(2);
  });
});
