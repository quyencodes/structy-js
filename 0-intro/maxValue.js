const maxValue = (nums) => {
  let max_number = -Infinity;

  for (let num of nums) {
    if (max_number < num) max_number = num;
  }

  return max_number;
};

module.exports = {
  maxValue,
};
