function maxValue(nums: Array<number>): number {
  let res: number = -Infinity;

  for (let num of nums) {
    if (res < num) res = num;
  }

  return res;
}

export {
  maxValue
}