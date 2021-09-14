// Write a function called curriedAdd. If you give this function a number, it returns a new function to you. If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.



function curriedAdd(num) {
  if (num === undefined) return 0;
  return function addNums(num2) {
    if (num2 === undefined) return num;
    num += num2;
    return addNums;
  };
};

module.exports = { curriedAdd };