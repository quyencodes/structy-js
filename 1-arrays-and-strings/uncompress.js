const uncompress = (s) => {
  const numbers = '0123456789';
  let i = 0,
    j = 0,
    res = [];

  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let k = 0; k < num; k++) {
        res.push(s[j]);
      }
      i = j + 1;
      j = i;
    }
  }
  return res.join('');
};

module.exports = {
  uncompress,
};
