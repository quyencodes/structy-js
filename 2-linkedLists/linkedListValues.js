// iterative
const linkedListValues = (head) => {
  let current = head;
  const res = [];
  while (current !== null) {
    res.push(current.val);
    current = current.next;
  }
  return res;
};

module.exports = {
  linkedListValues,
};

// recursive
const linkedListValues = (head) => {
  const res = [];
  _linkedListValues(head, res);
  return res;
};

const _linkedListValues = (head, res) => {
  if (head === null) return;
  res.push(head.val);
  _linkedListValues(head.next, res);
};

module.exports = {
  linkedListValues,
};
