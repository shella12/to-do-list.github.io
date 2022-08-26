import todoArray from './__mocks__/todoarray';
import removeTask from './removeTask';


const editTask = (event, list, checkboxLabel) => {
    const index = Number(list.id);
  
    if (event === 'label') {
    //   checkboxImage.src = iconDelete;
      // checkboxImage.id = 'delete';
      checkboxLabel.readOnly = false;
      checkboxLabel.id = 'labelClick';
      list.style.backgroundColor = 'yellow';
      checkboxLabel.style.backgroundColor = 'yellow';
    } else if (event === 'delete') {
      removeTask(list);
    } else if (event === 'labelClick') {
    //   checkboxImage.src = iconDots;
      // checkboxImage.id = 'dots';
    //   list.style.backgroundColor = 'white';
    //   checkboxLabel.style.backgroundColor = 'white';
      checkboxLabel.id = 'label';
      checkboxLabel.readOnly = true;
      todoArray[index].description = checkboxLabel.value;
    //   localStorage.setItem('data', JSON.stringify(todoArray));
    } else {
    //   checkboxImage.src = iconDots;
      // checkboxImage.id = 'dots';
    //   list.style.backgroundColor = 'white';
    //   checkboxLabel.style.backgroundColor = 'white';
      checkboxLabel.id = 'label';
      checkboxLabel.readOnly = true;
      todoArray[index].description = checkboxLabel.value;
    //   localStorage.setItem('data', JSON.stringify(todoArray));
    }
  };
  
  module.exports=editTask;