
const clearAllCompleted = (array) => {
    const arr = array.filter((element) => !(element.completed));
    // localStorage.setItem('data', JSON.stringify(arr));
    return arr;
  };

  module.exports=clearAllCompleted;