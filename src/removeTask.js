import todoArray from './__mocks__/todoarray';

const removeTask = (list) => {
  const index = Number(list.id);
  list.remove();
  todoArray.splice(index, 1);
  todoArray.forEach((element, index) => {
    element.index = index;
  });
};

module.exports = removeTask;