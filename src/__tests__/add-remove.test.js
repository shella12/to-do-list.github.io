/**
 * @jest-environment jsdom
 */
import addTask from '../addTask.js';
import removeTask from '../removeTask.js';
const todoArray=require('../__mocks__/todoarray')

describe('AddTask Tests',()=>{
    document.body.innerHTML =
    '<div>' +
    '  <ul class="list"></li>' +
    '</div>';
    let listItem;
    const list = document.querySelector('ul.list');

    test('Add first list item, length of <ul> should be 1',()=>{
        listItem=addTask('good game',1,false);
        list.appendChild(listItem);
        expect(list.children.length).toBe(1);
    });

    test('Add second list item, length of <ul> should be 2',()=>{
        listItem=addTask('good players',2,false);
        list.appendChild(listItem);
        const listChek=document.querySelectorAll('li.chklist');
        expect(listChek).toHaveLength(4);
        expect(list.children.length).toBe(2);
    });
})

describe('RemoveTask Tests',()=>{
    document.body.innerHTML =
    '<div>' +
    '  <ul class="listr"></li>' +
    '</div>';
    let listItem;
    const list = document.querySelector('ul.listr');
    todoArray.forEach(element => {
        listItem=addTask(element.description,element.index,false);
        list.appendChild(listItem);
    });

    test('remove first list item, length of <ul> should be 3',()=>{
        expect(list.children.length).toBe(4);
        removeTask(list.firstElementChild);
        expect(list.children.length).toBe(3);
    });

    test('remove second list item, length of <ul> should be 2',()=>{
        expect(list.children.length).toBe(3);
        removeTask(list.firstElementChild);
        expect(list.children.length).toBe(2);
    });
})