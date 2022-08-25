import addTask from './addTask.js';

test('Testing addTask',()=>{
    expect(addTask('Good cheese'),0,false).toMatch('/<li/');
})