const updateCheckbox = (list, array, checked) => {
  array[Number(list.id)].completed = checked;
  localStorage.setItem('data', JSON.stringify(array));
  if (checked) {
    list.classList.add('active');
  } else {
    list.classList.remove('active');
  }
};

module.exports = updateCheckbox;