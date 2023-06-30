function maxValue(nums: number[]): number {
  let maxNum: number = nums[0]
  for (let num of nums) {
    if (maxNum < num) {
      maxNum = num
    }
  }
  return maxNum
}

let result: interface = {
  func: () => number
}

export {
  maxValue: fn
}