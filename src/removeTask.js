const removeTask = (list) => {
    const index = Number(list.id);
    list.remove();
    todoArray.splice(index, 1);
    todoArray.forEach((element, index) => {
      element.index = index;
    });
    localStorage.setItem('data', JSON.stringify(todoArray));
  };

  module.exports=removeTask;