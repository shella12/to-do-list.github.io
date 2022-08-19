function updateCheckbox(list, array, checked) {
  array[Number(list.id)].completed = checked;
  localStorage.setItem('data', JSON.stringify(array));
  if (checked) {
    list.classList.add('active');
  } else {
    list.classList.remove('active');
  }
}
export function clearAllCompleted(array) {
  const arr = array.filter((element) => !(element.completed));
  localStorage.setItem('data', JSON.stringify(arr));
  return arr;
}

export default updateCheckbox;
