import todoArray from './__mocks__/todoarray';
import removeTask from './removeTask';

const editTask = (event, list, checkboxLabel) => {
  const index = Number(list.id);

  if (event === 'label') {
    checkboxLabel.readOnly = false;
    checkboxLabel.id = 'labelClick';
    list.style.backgroundColor = 'yellow';
    checkboxLabel.style.backgroundColor = 'yellow';
  } else if (event === 'delete') {
    removeTask(list);
  } else if (event === 'labelClick') {
    checkboxLabel.id = 'label';
    checkboxLabel.readOnly = true;
    todoArray[index].description = checkboxLabel.value;
  } else {
    checkboxLabel.id = 'label';
    checkboxLabel.readOnly = true;
    todoArray[index].description = checkboxLabel.value;
  }
};

module.exports = editTask;