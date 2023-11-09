const pairSum = (numbers, targetSum) => {
  const indexMap = {};
  let result;
  numbers.forEach((number, index) => {
    let difference = targetSum - number;
    if (difference in indexMap) {
      result = [index, indexMap[difference]];
    }
    indexMap[number] = index;
  });

  return result;
};

console.log(pairSum([3, 2, 5, 4, 1], 8));

module.exports = {
  pairSum,
};
