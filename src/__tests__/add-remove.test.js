
import addTask from '../addTask.js';
import {removeTask} from '../removeTask.js';
const list = document.body.querySelectorAll('.ulist-child');

// jest.mock('../add-remove.js')

test('Add task test',()=>{
    // document.body.innerHTML =
    // '<div>' +
    // '  <ul id="list"></li>' +
    // '</div>';
    // const listItem=addTask('good game',1,false);
    // const list = document.querySelectorAll('#list li');
    // list.ap
    // expect(addTask('good game',1,false)).toContain(/li/);
    // expect(2+2).toBe(4);
    expect(addTask('good game',1,false)).toBe(1);
});