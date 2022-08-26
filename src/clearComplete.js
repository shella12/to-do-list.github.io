const clearAllCompleted = (array) => {
  const arr = array.filter((element) => !(element.completed));
  return arr;
};

module.exports = clearAllCompleted;