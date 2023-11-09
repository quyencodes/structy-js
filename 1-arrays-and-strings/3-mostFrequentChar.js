const mostFrequentChar = (s) => {
  const unorderedMap = {};
  for (let letter of s) {
    if (!(letter in unorderedMap)) {
      unorderedMap[letter] = 0;
    }
    unorderedMap[letter] += 1;
  }

  let res = null;

  for (const [key, value] of Object.entries(unorderedMap)) {
    if (res === null || value > unorderedMap[res]) {
      res = key;
    }
  }
  return res;
};

module.exports = {
  mostFrequentChar,
};
