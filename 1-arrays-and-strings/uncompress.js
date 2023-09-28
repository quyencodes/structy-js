const uncompress = (s) => {
  res = [];
  let i = 0;
  let j = 0;

  while (j < s.length) {
    while (!isAlpha(s[j])) j += 1;

    let freq = Number(s.slice(i, j));

    for (let i = 0; i < freq; i++) {
      res.push(s[j]);
    }

    i = j + 1;
    j = i;
  }

  return res.join('');
};

const isAlpha = (c) => {
  let lowercase_start = 'a';
  let lowercase_end = 'z';
  let uppercase_start = 'A';
  let uppercase_end = 'Z';

  return (
    lowercase_start.charCodeAt(0) <= c.charCodeAt(0) &&
    c.charCodeAt(0) <= lowercase_end.charCodeAt(0)
  );
};

module.exports = {
  uncompress,
};
